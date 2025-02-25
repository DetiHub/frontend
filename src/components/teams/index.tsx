"use client"

import * as React from "react"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { teamData } from "./data"
import { motion } from "framer-motion"

export default function TeamSection() {
  const [activeTeam, setActiveTeam] = React.useState("Coordenação Geral")

  return (
    <div className="w-full px-4 py-6">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="relative flex w-full justify-center space-x-4 p-4 h-full bg-gray-600 rounded-t-md rounded-b-none border-b-[#84cc16] border-b-4 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-white">
          {Object.keys(teamData).map((team) => (
            <Button
              key={team}
              variant={activeTeam === team ? "default" : "ghost"}
              onClick={() => setActiveTeam(team)}
              className="rounded-full relative"
            >
              {team}
              {activeTeam === team && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#84cc16]"
                  layoutId="activeTeamIndicator"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Card className="p-6 rounded-t-none bg-gray-600 border-t-[#84cc16] border-t-4 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-b-white border-l-white border-r-white">
        <div className="space-y-8">
          {/* Team Leaders Section */}
          <div className="space-y-4">
            <h2 className="text-center">
              <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">Team Leaders</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {teamData[activeTeam].team_leaders.map((leader) => (
                <div key={leader.name} className="text-center">
                  <div className="relative mx-auto h-24 w-24 group">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#e9d5ff]">
                      {leader.img_src !== "<path_to_img_in_public>" ? (
                        <>
                          <img
                            src={
                              leader.name === "Bárbara Moreira"
                                ? leader.img_src || "/placeholder.svg"
                                : leader.img_src || "/placeholder.svg"
                            }
                            alt={leader.name}
                            className="h-full w-full object-cover transition-all duration-300"
                          />
                          {leader.name === "Bárbara Moreira" && (
                            <img
                              src="/public/teams/coordenacaoGeral/kaabi.jpg"
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
          {teamData[activeTeam].collabs && (
            <>
              <Separator />
              <div className="space-y-4">
                <h2 className="text-center">
                  <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">
                    Collaborators
                  </span>
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {teamData[activeTeam].collabs.map((collab) => (
                    <div key={collab.name} className="text-center">
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
    </div>
  )
}

