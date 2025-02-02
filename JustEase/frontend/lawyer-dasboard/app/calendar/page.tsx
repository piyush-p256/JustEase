"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HOURS = Array.from({ length: 24 }, (_, i) => i)
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Sample events
const events = [
  {
    title: "Case 257 meeting",
    day: 4, // Thursday
    startHour: 9,
    duration: 1,
    color: "bg-blue-500",
  },
  {
    title: "ODR for case 343",
    day: 5, // Friday
    startHour: 16,
    duration: 1,
    color: "bg-blue-500",
  },
]

export default function CalendarPage() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const startOfWeek = new Date(currentWeek)
  startOfWeek.setDate(currentWeek.getDate() - currentWeek.getDay())

  const formatDate = (date: Date) => {
    return date.getDate()
  }

  const getDates = () => {
    return DAYS.map((_, index) => {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + index)
      return date
    })
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline">today</Button>
          <h1 className="text-xl font-semibold text-white">Sep 17 - 23, 2023</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">month</Button>
          <Button variant="outline">week</Button>
          <Button variant="outline">day</Button>
        </div>
      </div>

      <div className="bg-[#232a4a] rounded-lg border border-gray-800">
        <div className="grid grid-cols-8 border-b border-gray-800">
          <div className="p-4 text-gray-400" />
          {getDates().map((date, i) => (
            <div key={i} className="p-4 text-center border-l border-gray-800">
              <div className="text-sm font-medium text-gray-400">
                {DAYS[i]} {formatDate(date)}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-8">
          <div className="border-r border-gray-800">
            {HOURS.map((hour) => (
              <div key={hour} className="h-20 border-b border-gray-800 p-2 text-xs text-gray-400">
                {hour === 0 ? "12am" : hour < 12 ? `${hour}am` : hour === 12 ? "12pm" : `${hour - 12}pm`}
              </div>
            ))}
          </div>

          {DAYS.map((_, dayIndex) => (
            <div key={dayIndex} className="relative border-r border-gray-800">
              {HOURS.map((hour) => (
                <div key={hour} className="h-20 border-b border-gray-800" />
              ))}
              {events
                .filter((event) => event.day === dayIndex)
                .map((event, i) => (
                  <div
                    key={i}
                    className={`absolute left-0 right-0 mx-1 p-2 rounded ${event.color} text-white text-sm`}
                    style={{
                      top: `${event.startHour * 5}rem`,
                      height: `${event.duration * 5}rem`,
                    }}
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

