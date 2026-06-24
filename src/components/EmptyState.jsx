import React from "react"
import emptyIllustration from "@/assets/image.png"

export function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-8 bg-white">
      <img 
        src={emptyIllustration} 
        alt="Select a widget to start" 
        className="w-130 h-auto object-contain opacity-90"
      />
      <div>
        <h3 className="text-gray-900 font-semibold text-lg">No widget selected</h3>
        <p className="text-gray-500 text-sm mt-1 max-w-sm">
          Click any metric on the left to start an AI-assisted analysis and ask questions about the data.
        </p>
      </div>
      <div className="animate-nudgeLeft text-violet-600 font-medium text-sm flex items-center gap-2 mt-4 px-4 py-2 bg-violet-50 rounded-full">
        ← Select a widget to begin
      </div>
    </div>
  )
}
