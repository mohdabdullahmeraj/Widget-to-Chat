import React from "react"
import { ContextStrip } from "./ContextStrip"
import { MessageThread } from "./MessageThread"
import { SuggestedQuestions } from "./SuggestedQuestions"
import { ChatInput } from "./ChatInput"

export function ChatPanel({ 
  selectedWidget, 
  chatHistory, 
  isTyping, 
  onSendMessage, 
  onSuggestedQuestion 
}) {
  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      <ContextStrip key={`context-${selectedWidget.id}`} widget={selectedWidget} />
      
      <MessageThread
        key={`thread-${selectedWidget.id}`}
        messages={chatHistory}
        isTyping={isTyping}
      />
      
      <SuggestedQuestions
        key={`suggested-${selectedWidget.id}`}
        questions={selectedWidget.suggestedQuestions}
        onSelect={onSuggestedQuestion}
      />
      
      <ChatInput onSend={onSendMessage} isTyping={isTyping} />
    </div>
  )
}
