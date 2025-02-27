"use client"
import { Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { teamData } from "./data"
import { Tabs } from "@/components/ui/tabs"

export default function TeamSection() {
  const tabs = Object.keys(teamData).map((team) => ({
    title: team,
    value: team,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl text-lg md:text-2xl font-bold text-white bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-3xl">
        <TeamContent team={team} leaders={teamData[team].team_leaders} collaborators={teamData[team].collabs ?? []} />
      </div>
    ),
  }))

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-center justify-start">
      <Tabs tabs={tabs} containerClassName="justify-center" />
    </div>
  )
}

interface TeamContentProps {
  team: string
  leaders: { name: string; img_src: string; linkedin: string; institution: string }[]
  collaborators: { name: string; img_src: string; linkedin: string; institution: string }[]
}

function TeamContent({ team, leaders, collaborators }: TeamContentProps) {
  const showTeamLeadersTitle = team !== "Coordenação Geral" && team !== "Financeiro"

  return (
    <Card className="h-full overflow-y-auto bg-transparent flex flex-col">
      <div className="sticky top-0 z-10 bg-[#84cc16] py-4">
        <h2 className="text-center">
          <span className="rounded-full bg-[#84cc16] px-6 py-1 text-2xl font-semibold font-medium text-white">{team}</span>
        </h2>
      </div>
      <div className="flex-grow flex flex-col justify-start p-4 space-y-8">
        {/* Team Leaders Section */}
        <div className="space-y-4 text-center flex-grow flex flex-col justify-center">
          {showTeamLeadersTitle && (
            <h3 className="text-center mb-4">
              <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">Team Leaders</span>
            </h3>
          )}
          <div
            className={`flex flex-wrap ${collaborators.length === 0 ? "gap-12 md:gap-12 justify-evenly" : "gap-8 justify-center"}`}
          >
            {leaders.map((leader) => (
              <div key={leader.name} className={`text-center ${collaborators.length === 0 ? "w-64" : ""}`}>
                <div className={`relative mx-auto group ${collaborators.length === 0 ? "h-48 w-48" : "h-24 w-24"}`}>
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
                        <svg
                          className={`${collaborators.length === 0 ? "h-24 w-24" : "h-12 w-12"} text-gray-400`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-0 right-0 rounded-full ${collaborators.length === 0 ? "p-2" : "p-1"} shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                      leader.name === "Bárbara Moreira"
                        ? "bg-[#C50852] hover:bg-[#C50852]/90"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <Linkedin
                      className={`${collaborators.length === 0 ? "h-6 w-6" : "h-4 w-4"} ${leader.name === "Bárbara Moreira" ? "text-white" : "text-[#0077b5]"}`}
                    />
                  </a>
                  {leader.institution !== "<path_to_institution_logo_in_public>" && (
                    <div
                      className={`absolute bottom-0 left-0 rounded-full ${collaborators.length === 0 ? "p-2" : "p-1"} shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                        leader.name === "Bárbara Moreira" ? "bg-[#C50852]" : "bg-white"
                      }`}
                    >
                      <img
                        src={leader.institution || "/placeholder.svg"}
                        alt="Institution"
                        className={`${collaborators.length === 0 ? "h-6 w-6" : "h-4 w-4"} object-contain ${
                          leader.name === "Bárbara Moreira" ? "brightness-0 invert" : ""
                        }`}
                      />
                    </div>
                  )}
                </div>
                <p className={`mt-2 font-medium ${collaborators.length === 0 ? "text-lg" : "text-sm"}`}>
                  {leader.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators Section */}
        {collaborators.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4 text-center">
              <div className="flex flex-wrap justify-center gap-4 w-full max-w-[1200px] mx-auto">
                {collaborators.map((collab) => (
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
  )
}

