"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { RadialChartComponent } from "./RadialChartComponent"
import { chatSession } from "../api/audit/model"

export function StatsDisplay({ data }) {
  const [recommendations, setRecommendations] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const fetchRecommendations = async () => {
    if (!data) return

    setIsLoading(true)
    const prompt = `
      Generate recommendations to improve a website that has the following results: 
      accessibility: ${data.accessibility}
      bestPractices: ${data.bestPractices}
      performance: ${data.performance}
      seo: ${data.seo}
      opportunities: ${JSON.stringify(data.opportunities, null, 2)}
    `.trim()

    try {
      const result = await chatSession.sendMessage(prompt)
      const responseText = await result.response.text()
      const cleanedResponse = responseText.replace(/```json\n|\n```/g, "")

      try {
        const recommendations = JSON.parse(cleanedResponse)
        setRecommendations(recommendations.recommendations)
      } catch {
        setRecommendations({ message: "Failed to parse response" })
      }
    } catch {
      setRecommendations({ message: "Error fetching recommendations" })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRecommendations()
  }, [data])

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4F46E5"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col w-full bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Website Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <RadialChartComponent value={data.seo} title="SEO" description="Search Engine Optimization" />
            <RadialChartComponent
              value={data.performance}
              title="Performance"
              description="Website Speed and Efficiency"
            />
            <RadialChartComponent
              value={data.accessibility}
              title="Accessibility"
              description="Inclusive User Experience"
            />
            <RadialChartComponent
              value={data.bestPractices}
              title="Best Practices"
              description="Web Development Standards"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Recommendations</h2>
          <Button onClick={fetchRecommendations} disabled={isLoading} className="mb-6 w-full">
            {isLoading ? "Fetching..." : "Refresh Recommendations"}
          </Button>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ) : recommendations ? (
            <div className="space-y-6">
              {Object.entries(recommendations).map(([category, data], index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <Button
                    onClick={() => toggleCategory(category)}
                    className="w-full justify-between mb-2 text-left"
                    variant="ghost"
                  >
                    <span className="font-semibold text-lg">{category}</span>
                    <span>{expandedCategory === category ? "▲" : "▼"}</span>
                  </Button>
                  {expandedCategory === category && (
                    <div className="mt-4">
                      <p className="text-gray-700 mb-4 italic">{data.summary}</p>
                      <ul className="space-y-3 text-gray-600">
                        {data.specificRecommendations && data.specificRecommendations.length > 0 ? (
                          data.specificRecommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-blue-500">•</span>
                              <span>
                                <strong className="font-medium text-gray-800">{rec.area}:</strong> {rec.details}
                              </span>
                            </li>
                          ))
                        ) : (
                          <li>No specific recommendations available.</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">
              No recommendations available. Click 'Refresh Recommendations' to fetch.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

