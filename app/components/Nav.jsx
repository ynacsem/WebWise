"use client"

import { useState, useEffect } from "react"

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  useEffect(()=>{
    console.log("API Key in Vercel:", process.env.NEXT_PUBLIC_PAGESPEED_API_KEY);

  },[])

  return (
    <div
      className={`navbar bg-cover bg-center px-24 bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 
        isScrolled ? "shadow-md backdrop-blur-md bg-white/70 border-b border-black " : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="#features">Features</a>
            </li>
            
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl font-bold hover:cursor-pointer">WebWise</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#features">Features</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn hover:bg-red-50 hover:border-black font-bold tracking-wider " href='#hero'>Start!</a>
      </div>
    </div>
  )
}
