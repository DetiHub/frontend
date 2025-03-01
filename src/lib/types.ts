export interface TeamMemberType {
    name: string
    img_src: string
    linkedin: string
    institution: string
  }

export interface SizeClasses {
    container: string
    icon: string
    button: string
    buttonIcon: string
    name: string
  }
  
export interface TeamMemberProps {
    member: TeamMemberType
    sizeClasses: SizeClasses
    isLeader: boolean
  }

export interface TeamContentProps {
    team: string
    leaders: TeamMemberType[]
    collaborators: TeamMemberType[]
  }