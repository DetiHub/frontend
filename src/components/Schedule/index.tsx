"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, MessageCircleQuestion, Presentation, BadgeCheck, UtensilsCrossed } from "lucide-react"
import { cn } from "@/lib/utils"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription
} from "@/components/ui/dialog"
import { eventsData, Event } from "./eventsData"

const eventIcons = {
  credenciacao: <BadgeCheck className="w-8 h-8 text-black" />,
  entrevistas: <MessageCircleQuestion className="w-8 h-8 text-black" />,
  feira: <Users className="w-8 h-8 text-black" />,
  palestra: <Presentation className="w-8 h-8 text-black" />,
  jantar: <UtensilsCrossed className="w-8 h-8 text-black" />,
}

const eventLabels = {
  credenciacao: "credenciação",
  entrevistas: "entrevistas",
  feira: "feira de empresas",
  palestra: "palestra",
  jantar: "jantar empresarial",
}

// Extended data with descriptions


// Process events to determine which ones should be full width
const events: Event[] = eventsData.map((event) => ({
  ...event,
  fullWidth: event.type === "jantar", // Force dinner event to be full width
}))

const timeSlots = Array.from({ length: 14 }, (_, i) => i + 9) // 9:00 to 22:00

// Types that can open dialog
const clickableEventTypes = ["palestra", "entrevistas", "feira"]

export function EventSchedule() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const days = [
    { id: "wednesday", label: "Quarta-feira", day: "26" },
    { id: "thursday", label: "Quinta-feira", day: "27" },
  ]

  const handleEventClick = (event: Event) => {
    if (clickableEventTypes.includes(event.type)) {
      setSelectedEvent(event)
      setDialogOpen(true)
    }
  }

  return (
    <div className="flex flex-col m-32 items-center w-full">
      {/* Title */}
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Horário do Evento
      </motion.h1>

      <div className="relative flex w-full m-8 overflow-hidden shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)]">
        {/* Time column */}
        <div className="flex-shrink-0 pt-[100px] w-16 border-l border-t border-b border-gray-100 bg-gray-600 bg-opacity-10 bg-clip-padding backdrop-blur-xl backdrop-filte rounded-l-xl text-white">
          {timeSlots.map((time) => (
            <div key={time} className="h-14 flex items-center justify-start pl-4">
              <span className="text-sm font-medium">{time}:00</span>
            </div>
          ))}
        </div>

        {/* Main schedule */}
        <div className="flex-grow relative overflow-hidden rounded-r-xl p-8 text-black border-t border-b border-r border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filte">
          {/* Decorative circles */}

          <div className="grid grid-cols-2 gap-6">
            {days.map((day) => (
              <div key={day.id} className="flex flex-col">
                <motion.h2
                  className="text-5xl font-bold mb-6 text-center text-black/90"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {day.label},
                  <span className="text-white pl-2">
                    {day.day}
                  </span>
                </motion.h2>

                <div className="relative grid grid-cols-4 gap-1 border border-white bg-lime-400/10 rounded-lg overflow-hidden">
                  {/* Horizontal grid lines */}
                  {timeSlots.map((time) => (
                    <div key={time} className="col-span-4 h-14 border-t border-dashed border-lime-200" />
                  ))}

                  {/* Events */}
                  {events
                    .filter((event) => event.day === day.id)
                    .map((event) => {
                      const height = (event.endTime - event.startTime) * 56 // 14px per hour * 4 (for the grid)
                      const top = (event.startTime - 9) * 56 // Offset from 9:00
                      const isClickable = clickableEventTypes.includes(event.type)

                      return (
                        <motion.div
                          key={event.id}
                          className={cn(
                            "absolute bg-lime-400/90 text-black rounded-md overflow-hidden shadow-lg",
                            hoveredEvent === event.id ? "z-10" : "z-0",
                            isClickable ? "cursor-pointer" : "",
                          )}
                          style={{
                            top: `${top}px`,
                            height: `${height}px`,
                            left: event.fullWidth ? "0%" : `${(event.column - 1) * 25}%`,
                            width: event.fullWidth ? "100%" : "24%",
                          }}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                          }}
                          onMouseEnter={() => setHoveredEvent(event.id)}
                          onMouseLeave={() => setHoveredEvent(null)}
                          onClick={() => handleEventClick(event)}
                        >
                          <div className="h-full flex flex-col items-center justify-center p-2">
                            {eventIcons[event.type]}
                            <div className="mt-2 text-sm font-medium text-center">
                              {eventLabels[event.type]}
                            </div>
                            {isClickable && (
                              <div className="mt-1 text-xs text-black opacity-75">
                                Clique para detalhes
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-black text-white border-lime-500">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-lime-400 flex items-center gap-2">
                  {eventIcons[selectedEvent.type]} 
                  {eventLabels[selectedEvent.type]} 
                  <span className="text-white text-lg ml-2">
                    {selectedEvent.startTime}:00 - {selectedEvent.endTime}:00
                  </span>
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-lg">
                  {days.find(d => d.id === selectedEvent.day)?.label}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {/* Event details */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-black/50 p-4 rounded-lg border border-lime-500/50">
                    <h3 className="text-xl font-bold text-lime-400 mb-2">Descrição</h3>
                    <p className="text-gray-200">
                      {selectedEvent.description ?? "Sem descrição disponível."}
                    </p>
                  </div>
                  
                  {selectedEvent.speaker && (
                    <div className="bg-black/50 p-4 rounded-lg border border-lime-500/50">
                      <h3 className="text-xl font-bold text-lime-400 mb-2">Palestrante</h3>
                      <p className="text-gray-200">{selectedEvent.speaker}</p>
                    </div>
                  )}
                </div>
                
                {/* Image and logo area */}
                <div className="space-y-4">
                  {/* Person image placeholder */}
                  {selectedEvent.type === "palestra" && (
                    <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
                      <div className="text-lime-400 text-center">
                        <Users className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Imagem do Palestrante</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Company logo placeholder */}
                  {selectedEvent.company && (
                    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                      <div className="text-lime-400 text-center">
                        <BadgeCheck className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">{selectedEvent.company}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}