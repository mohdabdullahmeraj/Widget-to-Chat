import React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { User, FileText, AlertCircle } from "lucide-react"

function Sparkline({ data, color }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const height = 30
  const width = 60
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((d - min) / range) * height
    return `${x},${y}`
  }).join(" ")

  return (
    <svg viewBox={`-2 -2 ${width + 4} ${height + 4}`} className="w-16 h-8 overflow-visible opacity-80">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Heatmap({ data, colorClass }) {
  return (
    <div className="flex flex-col gap-[2px] w-[60px] opacity-80">
      {data.slice(0, 3).map((row, i) => (
        <div key={i} className="flex gap-[2px] w-full h-[6px]">
          {row.weeks.map((val, j) => {
            const opacity = val > 85 ? 0.9 : val > 75 ? 0.5 : 0.2
            return (
              <div 
                key={j} 
                className={cn("flex-1 rounded-[1px]", colorClass)} 
                style={{ opacity }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

function BarChart({ data, colorClass }) {
  const max = Math.max(...data.map(d => d.count)) || 1
  return (
    <div className="flex flex-col gap-1.5 w-[60px] opacity-80 justify-end h-8">
      {data.slice(0, 3).map((d, i) => (
        <div key={i} className="w-full h-1.5 bg-gray-100 rounded overflow-hidden">
          <div 
            className={cn("h-full rounded", colorClass)}
            style={{ width: `${(d.count / max) * 100}%` }}
          />
        </div>
      ))}
    </div>
  )
}

export function WidgetCard({ widget, isSelected, onSelect, isCollapsed }) {
  const themes = {
    green: {
      pill: "bg-emerald-100 text-emerald-800",
      icon: <User className="w-4 h-4" />,
      chartColor: "#059669", // emerald-600
      chartBg: "bg-emerald-500"
    },
    amber: {
      pill: "bg-orange-100 text-amber-900",
      icon: <FileText className="w-4 h-4" />,
      chartColor: "#d97706", // amber-600
      chartBg: "bg-amber-500"
    },
    rose: {
      pill: "bg-rose-100 text-rose-800",
      icon: <AlertCircle className="w-4 h-4" />,
      chartColor: "#e11d48", // rose-600
      chartBg: "bg-rose-500"
    }
  }

  const theme = themes[widget.theme] || themes.green

  const trendPill = widget.trendDirection === "up" 
    ? "bg-emerald-50 text-emerald-700" 
    : "bg-rose-50 text-rose-700"

  const renderVisual = () => {
    if (widget.id === "w1") return <Sparkline data={widget.data} color={theme.chartColor} />
    if (widget.id === "w2") return <Heatmap data={widget.data} colorClass={theme.chartBg} />
    if (widget.id === "w3") return <BarChart data={widget.data} colorClass={theme.chartBg} />
    return null
  }

  if (isCollapsed) {
    return (
      <Card
        onClick={() => onSelect(widget)}
        className={cn(
          "cursor-pointer transition-all duration-200 border-none shadow-sm rounded-2xl p-3 flex items-center justify-between",
          isSelected
            ? "ring-2 ring-gray-900 shadow-md bg-white scale-[1.02]"
            : "hover:shadow hover:bg-white bg-white/60"
        )}
      >
        <div className={cn("flex w-full items-center gap-3 px-3 py-2 rounded-xl", theme.pill)}>
          <div className="shrink-0">{theme.icon}</div>
          <span className="text-sm font-semibold truncate leading-tight">{widget.title}</span>
        </div>
      </Card>
    )
  }

  return (
    <Card
      onClick={() => onSelect(widget)}
      className={cn(
        "cursor-pointer transition-all duration-200 border-none shadow-sm rounded-3xl p-5 flex flex-col gap-4 relative",
        isSelected
          ? "ring-2 ring-gray-900 shadow-md bg-white scale-[1.02]"
          : "hover:shadow hover:bg-gray-50/50 bg-white"
      )}
    >
      <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit", theme.pill)}>
        {theme.icon}
        <span className="text-sm font-medium">{widget.title}</span>
      </div>

      <div className="flex justify-between items-end mt-2">
        <div>
          <div className="text-[40px] leading-none font-bold text-gray-900 tracking-tight">
            {widget.keyMetric}
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
              {widget.timeframe}
            </span>
            <div className={cn("px-2 py-0.5 rounded-md text-xs font-semibold whitespace-nowrap", trendPill)}>
              {widget.trend}
            </div>
          </div>
        </div>
        <div className="pb-4 shrink-0">
          {renderVisual()}
        </div>
      </div>
    </Card>
  )
}
