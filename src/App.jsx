import React, { useState } from 'react'
import { WidgetPanel } from '@/components/WidgetPanel/WidgetPanel'
import { ChatPanel } from '@/components/ChatPanel/ChatPanel'
import { EmptyState } from '@/components/EmptyState'
import './App.css'

function App() {
  const [selectedWidget, setSelectedWidget] = useState(null)
  const [chatHistories, setChatHistories] = useState({})
  const [isTyping, setIsTyping] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handleWidgetSelect = (widget) => {
    setSelectedWidget(widget)
    if (!chatHistories[widget.id]) {
      setChatHistories(prev => ({
        ...prev,
        [widget.id]: widget.chatThread
      }))
    }
  }

  const appendMessage = (widgetId, message) => {
    setChatHistories(prev => ({
      ...prev,
      [widgetId]: [...(prev[widgetId] || []), message]
    }))
  }

  const handleSendMessage = (text) => {
    if (!selectedWidget) return

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      message: text
    }
    
    appendMessage(selectedWidget.id, userMsg)
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      // Check if the typed text exactly matches a suggested question
      const predefinedAnswer = selectedWidget.answers && selectedWidget.answers[text]

      let aiMsg
      if (predefinedAnswer) {
        aiMsg = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          message: predefinedAnswer.message,
          renderType: predefinedAnswer.renderType
        }
      } else {
        // Fallback generic answer if they typed something custom in the search bar
        aiMsg = {
          id: (Date.now() + 1).toString(),
          role: "ai",
          message: `I see you are looking for specific details about "${text}". Based on the current dataset, I'd recommend reviewing the detailed reporting logs for a deeper dive.`,
          renderType: "text"
        }
      }

      appendMessage(selectedWidget.id, aiMsg)
      setIsTyping(false)
    }, 1200)
  }

  const handleSuggestedQuestion = (text) => {
    handleSendMessage(text)
  }

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden text-gray-900 font-sans">
      <WidgetPanel 
        selectedWidget={selectedWidget} 
        onWidgetSelect={handleWidgetSelect} 
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      
      <div className="w-px bg-gray-200 shrink-0" />
      
      <div className="flex-1 flex flex-col min-w-0">
        {selectedWidget ? (
          <ChatPanel
            selectedWidget={selectedWidget}
            chatHistory={chatHistories[selectedWidget.id] || []}
            isTyping={isTyping}
            onSendMessage={handleSendMessage}
            onSuggestedQuestion={handleSuggestedQuestion}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

export default App
