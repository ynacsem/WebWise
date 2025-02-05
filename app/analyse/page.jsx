"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"
import { StatsDisplay } from "../components/StatsDisplay"
import { useAppContext } from "@/context/AppContext"

export default function Analyse() {
  const { variables } = useAppContext()
  const router = useRouter()



  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FFF9C4", stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: "#FFF59D", stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#yellowGradient)" />
      </svg>

      {/* Company Logo */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-2xl font-bold text-gray-800">WebWise</h1>
      </div>

      {/* Home Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-4 right-4 z-10 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Home
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        {variables ? (
          <StatsDisplay data={variables} />
        ) : (
          <p className="text-lg text-gray-600 text-center">
            No website data available. Please analyze a website first.
          </p>
        )}
      </div>
    </div>
  )
}
