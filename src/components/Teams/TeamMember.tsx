import { Linkedin } from "lucide-react"
import { TeamMemberProps } from "@/lib/types"

export function TeamMember({ member, sizeClasses, isLeader }: TeamMemberProps) {
  const isBarbaraMoreira = member.name === "Bárbara Moreira"
  
  return (
    <>
      <div className={`relative mx-auto group ${sizeClasses.container}`}>
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#e9d5ff]">
          {member.img_src !== "<path_to_img_in_public>" ? (
            <>
              <img
                src={member.img_src || "/placeholder.svg"}
                alt={member.name}
                className={`h-full w-full object-cover transition-all ${!isLeader ? "group-hover:brightness-75" : "duration-300"}`}
              />
              {isBarbaraMoreira && (
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
                className={`${sizeClasses.icon} text-gray-400`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          )}
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-0 right-0 rounded-full ${sizeClasses.button} shadow-lg ${isLeader ? "opacity-0 transition-all duration-300 group-hover:opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"} ${
            isBarbaraMoreira
              ? "bg-[#C50852] hover:bg-[#C50852]/90"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <Linkedin
            className={`${sizeClasses.buttonIcon} ${isBarbaraMoreira ? "text-white" : "text-[#0077b5]"}`}
          />
        </a>
        {member.institution !== "<path_to_institution_logo_in_public>" && (
          <div
            className={`absolute bottom-0 left-0 rounded-full ${sizeClasses.button} shadow-lg ${isLeader ? "opacity-0 transition-all duration-300 group-hover:opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"} ${
              isBarbaraMoreira ? "bg-[#C50852]" : "bg-white"
            }`}
          >
            <img
              src={member.institution || "/placeholder.svg"}
              alt="Institution"
              className={`${sizeClasses.buttonIcon} object-contain ${
                isBarbaraMoreira ? "brightness-0 invert" : ""
              }`}
            />
          </div>
        )}
      </div>
      <p className={`${isLeader ? "mt-2" : "mt-1 md:mt-2"} font-medium ${sizeClasses.name} ${!isLeader ? "truncate max-w-full px-1" : ""}`}>
        {member.name}
      </p>
    </>
  )
}