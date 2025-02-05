import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Find Issues",
      description:
        "Our tool thoroughly scans your website, identifying potential issues that may affect user experience, speed, and overall performance.",
    },
    {
      icon: "💡",
      title: "AI-Generated Recommendations",
      description:
        "Get actionable insights from our AI that recommends precise fixes tailored to your website's unique needs and goals.",
    },
    {
      icon: "📊",
      title: "Performance & SEO Analysis",
      description:
        "Comprehensive analysis of your website's performance, SEO, and user experience metrics to drive improvements and boost your online presence.",
    },
  ]

  return (
    (<div className="relative py-24 bg-gradient-to-b from-yellow-50 to-white">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20v-1.41l2.83-2.83 1.41 1.41L1.41 20H0zm20 0v-1.41l2.83-2.83 1.41 1.41L21.41 20H20zM0 0v1.41l2.83 2.83-1.41 1.41L0 3.41V0h1.41l2.83 2.83-1.41 1.41L0 1.41V0h20v1.41l-2.83 2.83 1.41 1.41L21.41 0H20zm16.17 18.41l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41z"
                fill="#FFD700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Empower Your Website 🚀</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-yellow-200 hover:border-yellow-400">
              <CardHeader>
                <h2 className="text-2xl font-semibold flex items-center text-gray-800">
                  <span className="text-4xl mr-3">{feature.icon}</span>
                  {feature.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>)
  );
}

