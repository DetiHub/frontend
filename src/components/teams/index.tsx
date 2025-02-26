"use client"

import * as React from "react"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { teamData } from "./data"
import { motion } from "framer-motion"


export default function TeamSection() {
  const [activeTeam, setActiveTeam] = React.useState("Coordenação Geral")
  const sectionRefs = React.useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({})

  React.useEffect(() => {
    Object.keys(teamData).forEach((team) => {
      sectionRefs.current[team] = React.createRef<HTMLDivElement>()
    })
  }, [])

  const scrollToSection = (team: string) => {
    setActiveTeam(team)

    //set a offset to scroll to the top of the section
    const offset = 150
    sectionRefs.current[team]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
    window.scrollBy(0, -offset)
  }

  return (
    <div className="w-full h-screen flex flex-col shadow-md">
      <div className="sticky top-0 z-10 bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-3xl border rounded-md border-white rounded-b-none">
        <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex justify-center space-x-4 p-4">
            {Object.keys(teamData).map((team) => (
              <motion.div key={team} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeTeam === team ? "default" : "ghost"}
                  onClick={() => scrollToSection(team)}
                  className={`relative rounded-full transition-colors duration-300 ${
                    activeTeam === team ? "bg-[#84cc16] text-white hover:bg-[#84cc16]/90" : "hover:bg-white/10"
                  }`}
                >
                  {team}
                  {activeTeam === team && (
                    <motion.div
                      className="absolute inset-0 bg-[#84cc16] rounded-full z-[-1]"
                      layoutId="activeTeamBackground"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <ScrollArea className="flex-grow border border-white rounded-md border-t-0 rounded-t-none">
        <div className="space-y-16 p-6">
          {Object.entries(teamData).map(([team, data]) => (
            <Card
              key={team}
              ref={sectionRefs.current[team]}
              className="p-6 rounded-md bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-3xl border shadow-md border-white"
            >
              <div className="space-y-8">
                {/* Team Leaders Section */}
                <div className="space-y-4">
                  <h2 className="text-center">
                    <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">{team}</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-8">
                    {data.team_leaders.map((leader) => (
                      <div key={leader.name} className="text-center">
                        <div className="relative mx-auto h-24 w-24 group">
                          <div className="relative h-full w-full overflow-hidden rounded-full bg-[#e9d5ff]">
                            {leader.img_src !== "<path_to_img_in_public>" ? (
                              <>
                                <img
                                  src={leader.img_src || "/placeholder.svg"}
                                  alt={leader.name}
                                  className="h-full w-full object-cover transition-all duration-300"
                                />
                                {leader.name === "Bárbara Moreira" && (
                                  <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kaabi.jpg-b9dJGW6EStvbk0RvOqHMHO7mF0ApDx.jpeg"
                                    alt="Hover Image"
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                  />
                                )}
                                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
                              </>
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute bottom-0 right-0 rounded-full p-1 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                              leader.name === "Bárbara Moreira"
                                ? "bg-[#C50852] hover:bg-[#C50852]/90"
                                : "bg-white hover:bg-gray-100"
                            }`}
                          >
                            <Linkedin
                              className={`h-4 w-4 ${leader.name === "Bárbara Moreira" ? "text-white" : "text-[#0077b5]"}`}
                            />
                          </a>
                          {leader.institution !== "<path_to_institution_logo_in_public>" && (
                            <div
                              className={`absolute bottom-0 left-0 rounded-full p-1 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                                leader.name === "Bárbara Moreira" ? "bg-[#C50852]" : "bg-white"
                              }`}
                            >
                              <img
                                src={leader.institution || "/placeholder.svg"}
                                alt="Institution"
                                className={`h-4 w-4 object-contain ${
                                  leader.name === "Bárbara Moreira" ? "brightness-0 invert" : ""
                                }`}
                              />
                            </div>
                          )}
                        </div>
                        <p className="mt-2 font-medium">{leader.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collaborators Section */}
                {data.collabs && (
                  <>
                    <Separator />
                    <div className="space-y-4">
                      <h2 className="text-center">
                        <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">
                          Collaborators
                        </span>
                      </h2>
                      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[1200px] mx-auto">
                        {data.collabs.map((collab) => (
                          <div key={collab.name} className="text-center w-full max-w-[160px]">
                            <div className="relative mx-auto h-20 w-20 group">
                              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#e9d5ff]">
                                {collab.img_src !== "<path_to_img_in_public>" ? (
                                  <>
                                    <img
                                      src={collab.img_src || "/placeholder.svg"}
                                      alt={collab.name}
                                      className="h-full w-full object-cover transition-all group-hover:brightness-75"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20" />
                                  </>
                                ) : (
                                  <div className="flex h-full items-center justify-center">
                                    <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              <a
                                href={collab.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-lg hover:bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                <Linkedin className="h-4 w-4 text-[#0077b5]" />
                              </a>
                              {collab.institution !== "<path_to_institution_logo_in_public>" && (
                                <div className="absolute bottom-0 left-0 rounded-full bg-white p-1 shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
                                  <img
                                    src={collab.institution || "/placeholder.svg"}
                                    alt="Institution"
                                    className="h-4 w-4 object-contain"
                                  />
                                </div>
                              )}
                            </div>
                            <p className="mt-2 text-sm font-medium">{collab.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

