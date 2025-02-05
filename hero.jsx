import React from "react"

export default function Hero() {
  return (
    (<div
      className="relative min-h-screen flex justify-center items-center overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">
        <path
          fill="#FDF6E3"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p
          className="text-sm font-semibold text-gray-600 mb-4 tracking-wide uppercase">By Yacine</p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Get Your Website Insights,{" "}
          <span className="relative inline-block">
            Powered
            <span
              className="absolute left-0 bottom-0 w-full h-3 bg-yellow-300 -z-10 transform -skew-x-12"></span>
          </span>{" "}
          By AI
        </h1>
        <p
          className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
          Instantly improve your website with AI-driven insights. Analyze key metrics and get personalized
          recommendations to boost performance, design, and user experience.
        </p>
        <button
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full text-lg shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>)
  );
}

