import React from "react"
import { WidgetCard } from "./WidgetCard"
import { mockWidgets } from "@/data/mockData"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

export function WidgetPanel({ selectedWidget, onWidgetSelect, isCollapsed, onToggleCollapse }) {
  return (
    <div className={`shrink-0 flex flex-col bg-slate-50 h-full border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-[260px]' : 'w-[360px] lg:w-[420px]'}`}>
      <div className={`p-6 pb-2 flex justify-between ${isCollapsed ? 'items-center' : 'items-start'}`}>
        <div className="flex-1">
          <h1 className={`text-xs font-bold text-gray-500 uppercase tracking-widest ${isCollapsed ? 'mb-0' : 'mb-1'}`}>
            Learning Dashboard
          </h1>
          {!isCollapsed && (
            <p className="text-sm text-gray-600 mt-1">
              Select a metric to start analysis
            </p>
          )}
        </div>
        <button 
          onClick={onToggleCollapse}
          className="p-2 shrink-0 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 pt-2 flex flex-col gap-4">
        {mockWidgets.map(widget => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            isSelected={selectedWidget?.id === widget.id}
            onSelect={onWidgetSelect}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  )
}
