import { Link } from "@tanstack/react-router";
import { eventDescription } from "./data";
import { Button } from "@/components/ui/button";

// 

export const HomepageCard = () => {
  const forms_url: string =
    "https://docs.google.com/forms/d/1N3oOOqsKGLZGei0LfJV5X7Zy3hqSKxMlWWCjxOKAeek";
  const eventLines = eventDescription.split("\n");
  return (
    <div className="h-[85%] w-full rounded-md border border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-sm backdrop-filter">
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div className="px-8 pt-4">
          <h3 className="pb-2 text-center text-5xl font-semibold">
            Event Description
          </h3>
          {eventLines.map((line) => (
            <p className="text-xl mb-4">{line}</p>
        ))}
        </div>
        <div className="flex w-full items-center h-16 justify-around space-x-2">
          {/* <Button
            className="w-full hover:bg-slate-800"
          >
          Schedule
        </Button> */}
        <Button asChild className="w-fit px-8 h-full text-2xl font-bold text-background bg-green-500 hover:bg-green-400">
          <Link to={forms_url} >Submit CV</Link>
        </Button>
      </div>
    </div>
    </div >
  );
};
