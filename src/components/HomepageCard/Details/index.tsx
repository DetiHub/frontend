import { eventDescription } from "./data";
import { Button } from "@/components/ui/button";

interface DetailsProps {
    setShowDetails: (showDetails: boolean) => void;
    setCurrentSection: (currentSection: number) => void;
}

export const Details = ({ setShowDetails, setCurrentSection }: DetailsProps) => {
  return (
    <div className="flex flex-col items-center">
        <div>
            <h3 className="text-lg font-semibold">Event Description</h3>
            <p className="text-sm">{eventDescription}</p>
        </div>
        <div className="flex items-center space-x-2">
            <Button onClick={() => setCurrentSection(2)}>Schedule</Button>
            <Button onClick={() => setShowDetails(false)}>Register</Button>
        </div>
    </div>
  );
};