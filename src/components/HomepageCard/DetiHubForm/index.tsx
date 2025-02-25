import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
interface FormProps {
    setShowDetails: (showDetails: boolean) => void;
}

export const DetiHubForm = ({ setShowDetails }: FormProps) => {
    return (
        <div className="relative flex flex-col items-center justify-center h-full w-full">
            <ArrowLeft
                size={32}
                className="absolute top-4 left-4 cursor-pointer"
                onClick={() => setShowDetails(true)}
            />
            <h3 className="text-lg font-semibold text-center mb-4">Register for the event</h3>
            <div className="flex items-center space-x-2">
                <Button onClick={() => setShowDetails(false)}>Register</Button>
            </div>
      </div>
    );
}