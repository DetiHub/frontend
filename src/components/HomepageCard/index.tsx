import { useState } from "react";

import { Details } from "./Details"
import { DetiHubForm } from "./DetiHubForm";

interface HomepageCardProps {
    setCurrentSection: (currentSection: number) => void;
}

export const HomepageCard = ({ setCurrentSection }: HomepageCardProps) => {
    const [showDetails, setShowDetails] = useState(true);

    return (
        <div className="p-8 h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100">
            {showDetails ? (
                    <Details setShowDetails={setShowDetails} setCurrentSection={setCurrentSection} />
                ) : (
                    <DetiHubForm setShowDetails={setShowDetails} />
                )
            }
        </div>
    )
}