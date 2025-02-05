
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GENERATIVE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Genenerate recomendations to improve a website that has the following as results: \naccessibility\n: \n93\nbestPractices\n: \n74\nopportunities\n: \nArray(1)\n0\n: \nmainDocumentTransferSize\n: \n46949\nmaxRtt\n: \n6.647265\nmaxServerLatency\n: \n98\nnumFonts\n: \n3\nnumRequests\n: \n99\nnumScripts\n: \n30\nnumStylesheets\n: \n3\nnumTasks\n: \n2283\nnumTasksOver10ms\n: \n39\nnumTasksOver25ms\n: \n17\nnumTasksOver50ms\n: \n14\nnumTasksOver100ms\n: \n10\nnumTasksOver500ms\n: \n0\nrtt\n: \n0.00045311595071055225\nthroughput\n: \n21610571276.47032\ntotalByteWeight\n: \n24509765\ntotalTaskTime\n: \n3504.469999999994\n[[Prototype]]\n: \nObject\nlength\n: \n1\n[[Prototype]]\n: \nArray(0)\nperformance\n: \n61\nseo\n: \n100\nin JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"recommendations\": {\n    \"overall\": \"The website performs well in SEO (100%) and has decent Accessibility (93%), but struggles with Performance (61%) and Best Practices (74%). The main focus should be on optimizing performance and addressing best practice violations.\",\n    \"performance\": {\n      \"summary\": \"Performance is the biggest area for improvement. The website has a large number of requests (99), a high number of tasks, and a significant total task time. This indicates that the website is likely slow to load and interact with.\",\n      \"specificRecommendations\": [\n        {\n          \"area\": \"Reduce Number of Requests\",\n          \"details\": \"The site makes 99 requests. Try to reduce this by: \\n   - Combining CSS and JavaScript files.\\n   - Using CSS sprites or icon fonts for multiple images.\\n   - Inlining critical CSS above-the-fold. \\n  - Evaluating third party scripts, and limiting them where possible\",\n           \"metric\": \"numRequests\",\n           \"current_value\": 99\n        },\n        {\n          \"area\": \"Optimize JavaScript Execution\",\n           \"details\": \"There are 30 JavaScript files and a large number of tasks, leading to a total task time of 3504ms. You should:\\n    - Minify and compress JavaScript files.\\n    - Defer loading non-critical JavaScript.\\n    - Consider using code-splitting to only load necessary JavaScript on specific pages/actions\\n    - Profile the JS and look for long blocking functions that can be optimized\",\n           \"metric\": \"numScripts, totalTaskTime\",\n           \"current_value\": \"30, 3504.469999999994\"\n        },\n        {\n          \"area\": \"Reduce Total Byte Weight\",\n          \"details\": \"The site has a total byte weight of 24.5MB. Focus on: \\n   - Compressing images and using modern formats like WebP.\\n   - Minifying and compressing HTML, CSS, and JavaScript files.\\n   - Removing unused code and assets. \\n   - Caching assets properly\",\n          \"metric\": \"totalByteWeight\",\n           \"current_value\": 24509765\n        },\n        {\n           \"area\": \"Reduce Long Tasks\",\n          \"details\": \"The site has 39 tasks over 10ms, 17 over 25ms, 14 over 50ms and 10 over 100ms. These can be caused by JS, CSS and layout thrashing, use the browser performance tools to determine which is the main cause. The goal is to reduce the time taken by longer tasks to keep the site responsive.\",\n          \"metric\": \"numTasksOver10ms, numTasksOver25ms, numTasksOver50ms, numTasksOver100ms\",\n           \"current_value\": \"39, 17, 14, 10\"\n        },\n        {\n          \"area\": \"Address High Main Document Transfer Size\",\n          \"details\": \"The main document transfer size is quite high (46949). This might indicate that:\\n  - The HTML page is too large with embedded styles and scripts. Consider moving it to external files\\n   - You are not compressing your HTML output\",\n           \"metric\": \"mainDocumentTransferSize\",\n           \"current_value\": 46949\n        }\n         ,\n        {\n          \"area\": \"Server Response Time\",\n           \"details\":\"Server Latency is at 98, whilst not terrible it's also not great, investigate server perfomance and make sure your backend code is optimized for speed, also investigate your DNS.\",\n            \"metric\": \"maxServerLatency\",\n            \"current_value\": 98\n         }\n      ]\n    },\n    \"bestPractices\": {\n      \"summary\": \"The best practices score of 74 suggests there are areas where the website does not adhere to common web development standards. This needs a deeper dive in to the details. \",\n     \"specificRecommendations\": [\n        {\n          \"area\": \"Best Practices Violations\",\n          \"details\": \"Review the best practice audit details, which were not provided in this output, to get more specific recommendations. This generally covers: \\n - Usage of deprecated APIs\\n - Image optimization techniques\\n - HTTPS setup \\n - Correct usage of HTML elements\\n - Security headers\",\n           \"metric\": \"bestPractices\",\n           \"current_value\": 74\n        }\n      ]\n    },\n      \"accessibility\": {\n      \"summary\": \"The accessibility score of 93 is excellent, but there might still be opportunities for minor enhancements.\",\n      \"specificRecommendations\": [\n         {\n            \"area\": \"Further Accessibility Review\",\n            \"details\": \"Conduct a more detailed accessibility audit to catch any remaining edge cases. This includes: \\n   - Making sure the website is navigable using only a keyboard\\n   - Ensuring form controls and elements are correctly implemented.\\n   - Checking color contrast ratios.\\n   - Reviewing ARIA attributes where used\",\n             \"metric\": \"accessibility\",\n              \"current_value\": 93\n         }\n       ]\n    },\n    \"seo\":{\n        \"summary\":\"The SEO score is already perfect at 100%, no further work is needed for this area\",\n        \"specificRecommendations\":[]\n    }\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
  

