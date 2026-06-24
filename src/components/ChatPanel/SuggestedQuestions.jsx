import React from "react"
import { Button } from "@/components/ui/button"

export function SuggestedQuestions({ questions, onSelect }) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="px-6 py-3 flex gap-2 flex-wrap bg-gray-50/50">
      {questions.map((q, i) => (
        <Button
          key={q}
          variant="outline"
          size="sm"
          onClick={() => onSelect(q)}
          className="text-gray-600 border-gray-200 bg-white hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 text-xs animate-fadeIn shadow-sm transition-all"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {q}
        </Button>
      ))}
    </div>
  )
}
