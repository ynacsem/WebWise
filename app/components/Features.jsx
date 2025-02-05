import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Features({ id }) {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21l-4-4m0 0l4-4m-4 4H4m3-7l-3 3 3 3m14-6h-8m-1.17-4A3 3 0 1 1 9 4a3 3 0 0 1 6.83 1" />
        </svg>
      ),
      title: "Find Issues",
      description: "Our tool thoroughly scans your website, identifying potential issues that may affect user experience, speed, and overall performance.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "AI-Generated Recommendations",
      description: "Get actionable insights from our AI that recommends precise fixes tailored to your website's unique needs and goals.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18M7 16v-5m5 5v-9m5 9V7" />
        </svg>
      ),
      title: "Performance & SEO Analysis",
      description: "Comprehensive analysis of your website's performance, SEO, and user experience metrics to drive improvements and boost your online presence.",
    },
  ];

  return (
    <div id={id} className="relative py-24 bg-gradient-to-b from-yellow-50 to-white pb-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-10">
        <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" className="text-yellow-100">
          <path d="M0 300Q300 100 600 300T1200 300" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="300" cy="300" r="80" fill="currentColor" />
          <circle cx="900" cy="300" r="60" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600">
            Powerful Features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your website's full potential with our comprehensive suite of optimization tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-yellow-100 hover:border-yellow-300 overflow-hidden"
            >
              {/* Animated background element */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-yellow-100 rounded-full blur-2xl"></div>
              </div>

              <CardHeader>
                <div className="mb-4 text-yellow-600 transition-colors group-hover:text-yellow-700">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{feature.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative graph illustration at bottom */}
        <div className="mt-20 mx-auto max-w-4xl opacity-20">
          <svg viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-300">
            <path d="M0 50 Q125 15 250 50 T500 50" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="150" cy="35" r="3" fill="currentColor" />
            <circle cx="250" cy="50" r="3" fill="currentColor" />
            <circle cx="350" cy="65" r="3" fill="currentColor" />
            <circle cx="450" cy="50" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
