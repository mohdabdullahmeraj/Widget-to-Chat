import React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MessageBubble({ message }) {
  const isUser = message.role === "user"

  if (isUser) {
    return (
      <div className="flex justify-end mb-4 animate-fadeIn">
        <div className="bg-violet-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[75%] shadow-sm">
          {message.message}
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-3 mb-6 animate-fadeIn">
      <Avatar className="w-8 h-8 shrink-0 border border-gray-200">
        <AvatarFallback className="bg-violet-100 text-violet-700 text-xs font-bold">AI</AvatarFallback>
      </Avatar>
      
      {message.renderType === "stat-callout" && (
        <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-sm">
          <p className="text-gray-700 text-sm">{message.message.text}</p>
          <div className="mt-3 px-3 py-2 bg-violet-50 border border-violet-100 rounded-lg">
            <p className="text-violet-700 font-semibold text-sm">{message.message.stat}</p>
          </div>
        </div>
      )}

      {message.renderType === "insight-card" && (
        <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-sm">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Key Insights</p>
          <ul className="space-y-1.5">
            {message.message.insights.map((insight, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-violet-500 font-bold">•</span> 
                <span className="leading-snug">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {message.renderType === "alert-text" && (
        <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-sm">
          <p className="text-sm text-gray-700 leading-relaxed">
            {message.message.parts.map((part, i) =>
              part.bold
                ? <span key={i} className="text-gray-900 font-semibold">{part.text}</span>
                : <span key={i}>{part.text}</span>
            )}
          </p>
        </div>
      )}
      
      {!["stat-callout", "insight-card", "alert-text"].includes(message.renderType) && (
         <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">{message.message}</p>
         </div>
      )}
    </div>
  )
}
