import { TeamMember } from "./TeamMember"
import { TeamMemberType } from "@/lib/types"

interface CollaboratorsListProps {
  collaborators: TeamMemberType[]
  layout: "few" | "many"
}

export function CollaboratorsList({ collaborators, layout }: CollaboratorsListProps) {
  const containerClasses = layout === "few" 
    ? "grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-4 w-full max-w-[1200px] mx-auto place-items-center"
    : "grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-x-4 gap-y-6 w-full max-w-[900px] mx-auto";

  const itemClasses = layout === "few" 
    ? "w-full max-w-[160px]" 
    : "md:w-[120px]";

  return (
    <div className={containerClasses}>
      {collaborators.map((collab) => (
        <div key={collab.name} className={`text-center ${itemClasses}`}>
          <TeamMember 
            member={collab}
            sizeClasses={{
              container: "h-16 w-16 md:h-20 md:w-20",
              icon: "h-8 w-8 md:h-10 md:w-10",
              button: "p-1",
              buttonIcon: "h-3 w-3 md:h-4 md:w-4",
              name: "text-xs md:text-sm"
            }}
            isLeader={false}
          />
        </div>
      ))}
    </div>
  )
}