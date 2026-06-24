import React from "react"
import { Badge } from "@/components/ui/badge"

export function ContextStrip({ widget }) {
  return (
    <div className="px-6 py-4 animate-slideDown flex items-center gap-4 bg-white border-b border-gray-200">
      <div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Active Context</p>
        <h2 className="text-gray-900 font-semibold text-sm leading-tight">{widget.title}</h2>
        {widget.description && (
          <p className="text-xs text-gray-500 mt-0.5">{widget.description}</p>
        )}
      </div>
      <Badge variant="secondary" className="ml-auto shrink-0 text-violet-700 bg-violet-100 hover:bg-violet-100 border-transparent">
        {widget.keyMetric}
      </Badge>
      <span className={`text-xs font-medium ${widget.trendDirection === "down" ? "text-red-600" : "text-emerald-600"}`}>
        {widget.trend}
      </span>
    </div>
  )
}
