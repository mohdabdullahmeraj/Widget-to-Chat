import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react"

export function ChatInput({ onSend, isTyping }) {
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim() || isTyping) return
    onSend(input)
    setInput("")
  }

  return (
    <div className="px-6 py-4 bg-white border-t border-gray-200 flex gap-3">
      <input
        className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 
                   text-sm text-gray-900 placeholder:text-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
        placeholder="Ask a question about this metric..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        disabled={isTyping}
      />
      <Button
        onClick={handleSend}
        disabled={isTyping || !input.trim()}
        className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl px-4 shadow-sm h-[42px]"
      >
        <SendHorizontal className="w-4 h-4 mr-2" />
        Send
      </Button>
    </div>
  )
}
