import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TeamLeadersList } from "./TeamLeadersList"
import { CollaboratorsList } from "./CollaboratorsList"
import { TeamContentProps } from "@/lib/types"


export function TeamContent({ team, leaders, collaborators }: TeamContentProps) {
  const showTeamLeadersTitle = team !== "Coordenação Geral" && team !== "Financeiro"
  const fewCollaborators = collaborators.length > 0 && collaborators.length <= 5
  
  return (
    <Card className="h-full overflow-y-auto bg-transparent flex flex-col">
      <div className="sticky top-0 z-10 bg-[#84cc16] py-4">
        <h2 className="text-center">
          <span className="rounded-full bg-[#84cc16] px-6 py-1 text-2xl font-semibold text-white">{team}</span>
        </h2>
      </div>
      
      {fewCollaborators ? (
        <div className="flex-grow flex flex-col justify-between p-4">
          {/* Team Leaders Section */}
          <div className="flex-1 flex flex-col justify-center space-y-4 text-center">
            {showTeamLeadersTitle && (
              <h3 className="text-center mb-4">
                <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">Team Leaders</span>
              </h3>
            )}
            <TeamLeadersList 
              leaders={leaders} 
              hasCollaborators={true}
              size="medium" 
            />
          </div>
          
          <Separator className="my-8" />
          
          {/* Collaborators Section */}
          <div className="flex-1 flex flex-col justify-center space-y-4 text-center">
            <CollaboratorsList collaborators={collaborators} layout="few" />
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col justify-start p-4 space-y-8">
          {/* Team Leaders Section */}
          <div className={`space-y-4 text-center ${collaborators.length === 0 ? "flex-grow flex flex-col justify-center" : ""}`}>
            {showTeamLeadersTitle && (
              <h3 className="text-center mb-4">
                <span className="rounded-full bg-[#84cc16] px-6 py-1 text-sm font-medium text-white">Team Leaders</span>
              </h3>
            )}
            <TeamLeadersList 
              leaders={leaders} 
              hasCollaborators={collaborators.length > 0}
              size={collaborators.length === 0 ? "large" : "medium"} 
            />
          </div>

          {/* Collaborators Section */}
          {collaborators.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4 text-center">
                <CollaboratorsList collaborators={collaborators} layout="many" />
              </div>
            </>
          )}
        </div>
      )}
    </Card>
  )
}