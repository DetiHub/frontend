"use client"
import { Tabs } from "@/components/ui/tabs"
import { teamData } from "./data"
import { TeamContent } from "./TeamContent"

export const TeamSection = () => {
  const tabs = Object.keys(teamData).map((team) => ({
    title: team,
    value: team,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl text-lg md:text-2xl font-bold text-white bg-gray-600 bg-opacity-10 backdrop-blur-3xl backdrop-filter">
        <TeamContent 
          team={team} 
          leaders={teamData[team].team_leaders} 
          collaborators={teamData[team].collabs ?? []} 
        />
      </div>
    ),
  })) 

  return (
    <div className="h-[40rem] md:h-[45rem] [perspective:1000px] relative space-y-2 flex flex-col max-w-7xl mx-auto w-full items-center justify-start">
      <span className="text-4xl md:text-5xl font-bold text-foreground">Teams</span>
      <Tabs tabs={tabs} containerClassName="justify-center" />
    </div>
  )
}