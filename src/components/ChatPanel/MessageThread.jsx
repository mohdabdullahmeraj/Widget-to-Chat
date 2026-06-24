import React, { useEffect, useRef } from "react"
import { MessageBubble } from "./MessageBubble"

export function MessageThread({ messages, isTyping }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [messages, isTyping])

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col min-h-0">
      <div className="flex flex-col flex-1">
        {messages.map((msg, i) => (
          <MessageBubble key={msg.id || i} message={msg} />
        ))}
        
        {isTyping && (
          <div className="flex gap-3 mb-6 animate-fadeIn">
            <div className="w-8 h-8 shrink-0 rounded-full bg-violet-100 flex items-center justify-center border border-violet-200">
              <span className="text-violet-700 text-xs font-bold">AI</span>
            </div>
            <div className="flex gap-1.5 px-4 py-3.5 w-fit bg-white border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm items-center">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} className="h-4 shrink-0" />
      </div>
    </div>
  )
}
