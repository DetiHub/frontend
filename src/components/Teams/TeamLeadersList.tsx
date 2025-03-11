import { TeamMember } from "./TeamMember"
import { TeamMemberType } from "@/lib/types"

interface TeamLeadersListProps {
  leaders: TeamMemberType[]
  hasCollaborators: boolean
  size: "medium" | "large"
}

export function TeamLeadersList({ leaders, hasCollaborators, size }: TeamLeadersListProps) {
  // Determinar classes com base no tamanho
  const getContainerClasses = () => {
    if (!hasCollaborators) return "gap-8 md:gap-12 justify-evenly"
    return "gap-8 justify-center"
  }

  const getImageSizeClasses = () => {
    if (size === "large") return "h-32 w-32 md:h-40 md:w-40"
    return "h-24 w-24"
  }

  const getIconSizeClasses = () => {
    if (size === "large") return "h-16 w-16 md:h-20 md:w-20"
    return "h-12 w-12"
  }

  const getButtonSizeClasses = () => {
    if (size === "large") return "p-1.5 md:p-2"
    return "p-1"
  }

  const getButtonIconSizeClasses = () => {
    if (size === "large") return "h-5 w-5 md:h-6 md:w-6"
    return "h-4 w-4"
  }

  const getNameSizeClasses = () => {
    if (size === "large") return "text-sm md:text-lg"
    return "text-sm"
  }

  return (
    <div className={`flex flex-wrap ${getContainerClasses()}`}>
      {leaders.map((leader) => (
        <div 
          key={leader.name} 
          className={`text-center ${!hasCollaborators ? "w-40 md:w-64" : ""}`}
        >
          <TeamMember 
            member={leader}
            sizeClasses={{
              container: getImageSizeClasses(),
              icon: getIconSizeClasses(),
              button: getButtonSizeClasses(),
              buttonIcon: getButtonIconSizeClasses(),
              name: getNameSizeClasses()
            }}
            isLeader={true}
          />
        </div>
      ))}
    </div>
  )
}