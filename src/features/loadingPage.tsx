"use client"

import { useEffect, useState } from "react"
import { FileText, Sparkles, Package, Settings, BarChart3 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const LoadingPage = () => {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()
  const targetProgress = 100

  useEffect(() => {
    // Animate progress to target value
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1
        }
        navigate('/store')
        return prev
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="flex flex-col items-center gap-12">
        {/* Animated Icon Cluster */}
        <div className="relative">
          {/* Center Icon - Large Purple Circle */}
          <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl">
            <Sparkles className="h-16 w-16 text-white" strokeWidth={2.5} />
          </div>

          {/* Floating Icons Around Center */}
          {/* Top Icon */}
          <div className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 animate-float-slow">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Package className="h-7 w-7 text-purple-600" />
            </div>
          </div>

          {/* Left Icon */}
          <div className="absolute left-0 top-1/2 z-10 -translate-x-8 -translate-y-1/2 animate-float-delay-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <BarChart3 className="h-7 w-7 text-purple-600" />
            </div>
          </div>

          {/* Right Icon */}
          <div className="absolute right-0 top-1/2 z-10 translate-x-8 -translate-y-1/2 animate-float-delay-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Settings className="h-7 w-7 text-purple-600" />
            </div>
          </div>

          {/* Bottom Icon */}
          <div className="absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float-delay-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <FileText className="h-7 w-7 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="flex items-center gap-2 text-gray-600">
          <FileText className="h-5 w-5 text-purple-600" />
          <p className="text-base">Writing your product descriptions...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Building your store</span>
            <span className="font-semibold text-purple-600">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500">This will only take a moment...</p>
        </div>
      </div>
    </div>
  )
}
