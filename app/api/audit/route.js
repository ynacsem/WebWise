export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  // Validate URL format
  try {
    new URL(url);
  } catch {
    return Response.json({ error: "Invalid URL format" }, { status: 400 });
  }

  // Block Google-owned domains (e.g., YouTube, Google)
  if (new URL(url).hostname.endsWith('.google.com') || 
      new URL(url).hostname.endsWith('.youtube.com')) {
    return Response.json({ error: "Domain not supported for analysis" }, { status: 400 });
  }

  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  // Construct API URL with strategy and categories
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=desktop&category=PERFORMANCE&category=SEO&category=ACCESSIBILITY&category=BEST_PRACTICES&key=${apiKey}`;

  try {
    // Add retry logic for 500 errors
    let retries = 3;
    let response;
    while (retries > 0) {
      response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; YourBot/1.0)'
        }
      });

      if (response.status === 500) {
        retries--;
        await new Promise(resolve => setTimeout(resolve, 2000 * (4 - retries))); // Exponential backoff
        continue;
      }
      break;
    }

    // Handle API errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`PageSpeed API Error (${response.status}):`, errorText);
      return Response.json({ error: "Failed to fetch data from PageSpeed API" }, { status: response.status });
    }

    const data = await response.json();

    // Validate API response structure
    if (!data?.lighthouseResult) {
      return Response.json({ error: "Invalid API response structure" }, { status: 500 });
    }

    // Extract scores and opportunities
    const result = {
      performance: getScore(data, 'performance'),
      seo: getScore(data, 'seo'),
      accessibility: getScore(data, 'accessibility'),
      bestPractices: getScore(data, 'best-practices'),
      opportunities: data.lighthouseResult?.audits?.diagnostics?.details?.items || []
    };

    return Response.json(result);
  } catch (error) {
    console.error("Server Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Helper function to safely extract scores
function getScore(data, category) {
  const score = data.lighthouseResult?.categories?.[category]?.score;
  return typeof score === 'number' ? Math.round(score * 100) : null;
}