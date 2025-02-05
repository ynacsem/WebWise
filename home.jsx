"use client"

import { useState } from "react"
import { ArrowPathIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { CircularProgress } from "@/components/circular-progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [url, setUrl] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  async function analyzeWebsite() {
    if (!url) return
    setLoading(true)
    try {
      const response = await fetch(`/api/audit?url=${encodeURIComponent(url)}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error("Analysis failed:", error)
    }
    setLoading(false)
  }

  return (
    (<div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-yellow-600 mb-6 flex items-center justify-center">
            <SparklesIcon className="h-10 w-10 mr-2 text-yellow-500" />
            Webwise Analytics
          </h1>
          <div className="flex gap-4 justify-center">
            <Input
              type="text"
              placeholder="https://example.com"
              className="w-96 px-6 py-3"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && analyzeWebsite()} />
            <Button
              onClick={analyzeWebsite}
              disabled={loading}
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white">
              {loading ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Analyze Now
                </>
              )}
            </Button>
          </div>
        </div>

        {data && (
          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-600">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <CircularProgress value={data.performance} label="Performance" />
                  <CircularProgress value={data.seo} label="SEO Score" />
                  <CircularProgress value={data.accessibility} label="Accessibility" />
                  <CircularProgress value={data.bestPractices} label="Best Practices" />
                </div>
              </CardContent>
            </Card>

            {data.opportunities?.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-600 flex items-center gap-2">
                    <SparklesIcon className="w-6 h-6" />
                    Optimization Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {data.opportunities.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-yellow-800">{item.metric}</h3>
                          <p className="text-gray-600 mt-1">Opportunity: Improve by {item.duration}ms</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>)
  );
}

