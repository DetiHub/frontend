import { Link } from "@tanstack/react-router";
import { eventDescription } from "./data";
import { Button } from "@/components/ui/button";

// 

export const HomepageCard = () => {
  const forms_url: string =
    "https://docs.google.com/forms/d/1N3oOOqsKGLZGei0LfJV5X7Zy3hqSKxMlWWCjxOKAeek";

  return (
    <div className="h-[85%] w-full rounded-md border border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-sm backdrop-filter">
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div className="px-8 pt-12">
          <h3 className="pb-8 text-center text-5xl font-semibold">
            Event Description
          </h3>
          <p className="text-xl">{eventDescription}</p>
        </div>
        <div className="flex w-full items-center justify-around space-x-2">
          <Button
            className="w-full hover:bg-slate-800"
          >
          Schedule
        </Button>
        <Button asChild className="w-full bg-green-500 hover:bg-green-400">
          <Link to={forms_url}>Register</Link>
        </Button>
      </div>
    </div>
    </div >
  );
};
