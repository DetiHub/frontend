"use client"
import { Tabs } from "@/components/ui/tabs"
import { teamData } from "./data"
import { TeamContent } from "./TeamContent"

export default function TeamSection() {
  const tabs = Object.keys(teamData).map((team) => ({
    title: team,
    value: team,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl text-lg md:text-2xl font-bold text-white bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-3xl">
        <TeamContent 
          team={team} 
          leaders={teamData[team].team_leaders} 
          collaborators={teamData[team].collabs ?? []} 
        />
      </div>
    ),
  }))

  return (
    <div className="h-[40rem] md:h-[42rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-center justify-start">
      <Tabs tabs={tabs} containerClassName="justify-center" />
    </div>
  )
}