"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  MessageCircleQuestion,
  Presentation,
  BadgeCheck,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { eventsData, type Event, sponsorsWednesday, sponsorsThursday, sponsorsInterviewMorningWednesday, sponsorsInterviewAfternoonWednesday } from "./eventsData"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import Waves  from "@/components/Waves"

const eventIcons = {
  credenciacao: <BadgeCheck className="w-8 h-8 md:w-8 md:h-8 w-5 h-5 text-black" />,
  entrevistas: <MessageCircleQuestion className="w-8 h-8 md:w-8 md:h-8 w-5 h-5 text-black" />,
  feira: <Users className="w-8 h-8 md:w-8 md:h-8 w-5 h-5 text-black" />,
  palestra: <Presentation className="w-8 h-8 md:w-8 md:h-8 w-5 h-5 text-black" />,
  jantar: <UtensilsCrossed className="w-8 h-8 md:w-8 md:h-8 w-5 h-5 text-black" />,
}

const eventLabels = {
  credenciacao: "Credenciação",
  entrevistas: "Entrevistas",
  feira: "Feira de Empresas",
  palestra: "Palestra",
  jantar: "Jantar Empresarial",
}

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
  const [activeDay, setActiveDay] = useState(0)
  const isMobile = useMobile()

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

  const nextDay = () => {
    setActiveDay((prev) => (prev + 1) % days.length)
  }

  const prevDay = () => {
    setActiveDay((prev) => (prev - 1 + days.length) % days.length)
  }

  return (
    <div className={cn("flex flex-col items-center w-full", isMobile ? "mx-0" : "m-32")}>
      {/* Title */}
      <motion.h1
        className={cn("font-bold mb-4 text-center", isMobile ? "text-3xl" : "text-6xl")}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Horário do Evento
      </motion.h1>

      <div
        className={cn(
          "relative flex w-full overflow-hidden shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)]",
          isMobile ? "mx-0 flex-col" : "m-8",
        )}
      >
        {/* Mobile day selector */}
        {isMobile && (
          <div className="flex items-center justify-between p-4 bg-gray-600 bg-opacity-10 backdrop-blur-xl">
            <Button variant="ghost" size="icon" onClick={prevDay} disabled={activeDay === 0} className="text-white">
              <ChevronLeft />
            </Button>
            <motion.h2
              className="text-2xl font-bold text-center text-black/90"
              key={days[activeDay].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {days[activeDay].label},<span className="text-white pl-2">{days[activeDay].day}</span>
            </motion.h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextDay}
              disabled={activeDay === days.length - 1}
              className="text-white"
            >
              <ChevronRight />
            </Button>
          </div>
        )}

        <div className={cn("flex", isMobile ? "flex-row" : "w-full")}>
          {/* Time column */}
          <div
            className={cn(
              "flex-shrink-0 w-16 border-l border-t border-b border-gray-100 bg-gray-600 bg-opacity-10 bg-clip-padding backdrop-blur-xl backdrop-filte text-white",
              isMobile ? "pt-[28px] rounded-l-xl" : "pt-[90px] rounded-l-xl",
            )}
          >
            {timeSlots.map((time) => (
              <div key={time} className={cn("flex items-center justify-start pl-4", 
                isMobile ? "h-[48px]" : "h-[55px]"
              )}>
                <span className={cn("font-medium", isMobile ? "text-xs" : "text-sm")}>{time}:00</span>
              </div>
            ))}
          </div>

          {/* Main schedule */}
          <div className={cn(
            "flex-grow relative overflow-hidden rounded-r-xl text-black border-t border-b border-r border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter",
            isMobile ? "p-2" : "p-4 md:p-8"
          )}>
            {/* Desktop view - both days side by side */}
            {!isMobile && (
              <div className="grid grid-cols-2 gap-6">
                {days.map((day) => (
                  <div key={day.id} className="flex flex-col">
                    <motion.h2
                      className="text-5xl font-bold mb-6 text-center text-black/90"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {day.label},<span className="text-white pl-2">{day.day}</span>
                    </motion.h2>

                    <div className="relative grid grid-cols-4 border border-white bg-lime-400/10 rounded-lg overflow-hidden">
                      {/* Horizontal grid lines */}
                      {timeSlots.map((time) => (
                        <div key={time} className="col-span-4 h-14 border-t border-dashed border-lime-200" />
                      ))}

                      {/* Events */}
                      {events.filter((event) => event.day === day.id).map((event) => renderEvent(event, false))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mobile view - single day at a time */}
            {isMobile && (
              <div className="flex flex-col">
                <div className="relative grid grid-cols-4 gap-1 border border-white bg-lime-400/10 rounded-lg overflow-hidden pt-[28px]">
                  {/* Horizontal grid lines */}
                  {timeSlots.map((time) => (
                    <div key={time} className="col-span-4 h-[48px] border-t border-dashed border-lime-200" />
                  ))}

                  {/* Events */}
                  {events.filter((event) => event.day === days[activeDay].id).map((event) => renderEvent(event, true))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-5xl border-gray-100 text-black p-4 md:p-6"
             style={{
              background: `
                  radial-gradient(120.85% 71.24% at 80.08% 1.48%, #92d400 0%, rgba(255,255,255,1) 100%),
                  radial-gradient(77.85% 61.24% at 20.08% 98.48%, #92d400 0%, rgba(255,255,255,1) 100%)
                `,
            }}>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <Waves
            lineColor="rgba(255, 255, 255, 0.8)"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.03}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={0}
            xGap={12}
            yGap={12}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        />
          {selectedEvent && (
            <div className="z-10">
              {selectedEvent.type === "palestra" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left column - Main content */}
                  <div className="space-y-4">
                    <DialogHeader>
                      <DialogTitle className={cn("flex flex-col md:flex-row items-start md:items-center gap-2", isMobile ? "text-xl" : "text-2xl")}>
                        <div className="flex items-center gap-2">
                          {eventIcons[selectedEvent.type]}
                          {eventLabels[selectedEvent.type]}
                        </div>
                        <span className="text-black text-base md:text-lg md:ml-2">
                          {selectedEvent.startTime}:00 - {selectedEvent.endTime}:00
                        </span>
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 text-base md:text-lg">
                        {days.find((d) => d.id === selectedEvent.day)?.label}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter">
                        <h3 className="text-xl font-bold mb-2">Descrição</h3>
                        <p className="text-gray-700">{selectedEvent.description ?? "Sem descrição disponível."}</p>
                      </div>

                      {selectedEvent.speaker && (
                        <div className="p-4 rounded-lg border border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter">
                          <h3 className="text-xl font-bold mb-2">Orador</h3>
                          <p className="text-gray-700 font-semibold mb-1">{selectedEvent.speaker}</p>
                          {selectedEvent.speakerDescription && (
                            <p className="text-gray-600">{selectedEvent.speakerDescription}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right column - Company Logo */}
                  <div className="flex items-stretch h-full">
                    {selectedEvent.company && (
                      <div className="w-full rounded-xl p-8 border border-gray-100 flex items-center justify-center bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter">
                        <img
                          src={selectedEvent.logo}
                          alt={selectedEvent.company}
                          className="w-full h-auto max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Regular full-width layout for other event types
                <div>
                  <DialogHeader>
                    <DialogTitle className={cn("flex flex-col md:flex-row items-start md:items-center gap-2", isMobile ? "text-xl" : "text-2xl")}>
                      <div className="flex items-center gap-2">
                        {eventIcons[selectedEvent.type]}
                        {eventLabels[selectedEvent.type]}
                      </div>
                      <span className="text-black text-base md:text-lg md:ml-2">
                        {selectedEvent.startTime}:00 - {selectedEvent.endTime}:00
                      </span>
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-base md:text-lg">
                      {days.find((d) => d.id === selectedEvent.day)?.label}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 mt-4">
                    <div className="p-4 rounded-lg border border-gray-100 bg-gray-600 bg-opacity-10 hover:shadow-lg shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter">
                      <h3 className="text-xl font-bold mb-2">Descrição</h3>
                      <p className="text-gray-700">{selectedEvent.description ?? "Sem descrição disponível."}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Full width sections */}
              {selectedEvent.type === "entrevistas" && (
                <div className="mt-6 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center text-black">Empresas Participantes</h3>
                  {selectedEvent.day === "wednesday" ? (
                    selectedEvent.startTime < 15 ? (
                      <div className="space-y-6">
                        <div className="p-6 rounded-xl">
                          <div className={cn(
                            "grid gap-6",
                            sponsorsInterviewMorningWednesday.sponsors.length === 2 
                              ? "grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto" 
                              : "grid-cols-1 md:grid-cols-3"
                          )}>
                            {sponsorsInterviewMorningWednesday.sponsors.map((sponsor) => (
                              <div key={sponsor.name} className="flex flex-col items-center gap-3 border border-gray-100 p-4 rounded-xl hover:shadow-lg transition-shadow bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter">
                                <img 
                                  src={sponsor.logo} 
                                  alt={sponsor.name} 
                                  className="w-48 h-32 object-contain" 
                                  title={sponsor.name}
                                />
                                <p className="text-base font-medium text-gray-600">Sala {sponsor.room}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="p-6 rounded-xl">
                          <div className={cn(
                            "grid gap-6",
                            sponsorsInterviewAfternoonWednesday.sponsors.length === 2 
                              ? "grid-cols-2 md:grid-cols-2 max-w-2xl mx-auto" 
                              : "grid-cols-1 md:grid-cols-3"
                          )}>
                            {sponsorsInterviewAfternoonWednesday.sponsors.map((sponsor) => (
                              <div key={sponsor.name} className="flex flex-col items-center gap-3 border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter rounded-lg border p-4 hover:shadow-lg ">
                                <img 
                                  src={sponsor.logo} 
                                  alt={sponsor.name} 
                                  className="w-48 h-32 object-contain"
                                  title={sponsor.name}
                                />
                                <p className="text-base font-medium text-gray-600">Sala {sponsor.room}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="flex items-center justify-center p-12">
                      <p className="text-2xl font-medium text-gray-600">Brevemente</p>
                    </div>
                  )}
                </div>
              )}

              {selectedEvent.type === "feira" && (
                <div className="mt-6 p-4 text-center rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Empresas Participantes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {selectedEvent.day === "wednesday" ? sponsorsWednesday.sponsors.slice(0, 10).map((sponsor) => (
                      <div key={sponsor.name} className="flex flex-col items-center justify-center p-3 md:p-4 hover:shadow-lg border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter rounded-lg border">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-28 h-28 md:w-28 md:h-28 object-contain"
                        />
                      </div>
                      )) : sponsorsThursday.sponsors.slice(0, 10).map((sponsor) => (
                      <div key={sponsor.name} className="flex flex-col items-center justify-center p-3 md:p-4 hover:shadow-lg border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter rounded-lg border">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-28 h-28 md:w-28 md:h-28 object-contain"
                        />
                      </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )

  // Helper function to render an event
  function renderEvent(event: Event, isMobileView: boolean) {
    const height = (event.endTime - event.startTime) * (isMobileView ? 48 : 56) // Adjust height for mobile
    const top = (event.startTime - 9) * (isMobileView ? 48 : 56) + (isMobileView ? 28 : 0) // Adjust top position for mobile
    const isClickable = clickableEventTypes.includes(event.type)

    return (
      <motion.div
        key={event.id}
        className={cn(
          "absolute bg-lime-400/90 border-lime-200 border text-black rounded-md overflow-hidden shadow-lg",
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
        <div className={cn(
          "h-full flex flex-col items-center justify-center",
          isMobileView ? "p-1" : "p-2"
        )}>
          {eventIcons[event.type]}
          <div
            className={cn(
              "font-medium text-center",
              isMobileView ? "text-[10px] mt-1" : "text-sm mt-2",
            )}
          >
            {eventLabels[event.type]}
          </div>
          {isClickable && !isMobileView && (
            <div className="mt-1 text-xs text-black opacity-75">Clique para detalhes</div>
          )}
        </div>
      </motion.div>
    )
  }
}

