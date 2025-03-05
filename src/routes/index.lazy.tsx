import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { HomepageCard } from "@/components/HomepageCard";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (event.deltaY > 0) {
          // Scrolling down
          if (currentSection < sectionRefs.current.length - 1) {
            setCurrentSection((prev) => prev + 1);
          }
        } else {
          // Scrolling up
          if (currentSection > 0) {
            setCurrentSection((prev) => prev - 1);
          }
        }
      }, 100);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentSection]);

  useEffect(() => {
    if (sectionRefs.current[currentSection]) {
      sectionRefs.current[currentSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentSection]);

  return (
    <div className="">
      <div
        ref={(el) => {
          sectionRefs.current[0] = el!;
        }}
        className="section h-screen p-16"
      >
        <div className="flex h-full">
          <div className="flex flex-[6] items-center justify-center">
            <img
              src="/logo_vertical_cores.png"
              alt="Logo"
              className="max-w-[75%]"
            />
          </div>
          <div className="flex flex-[3] items-center">
            <HomepageCard setCurrentSection={setCurrentSection} />
          </div>
        </div>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[1] = el!;
        }}
        className="section h-screen p-16"
      >
        <div className="flex h-full justify-center">
          <div className="flex-1">
            <p>logo placeholder</p>
          </div>
          <div className="flex-1">
            <HomepageCard setCurrentSection={setCurrentSection} />
          </div>
        </div>
      </div>
      <div
        ref={(el) => {
          sectionRefs.current[2] = el!;
        }}
        className="section h-screen p-16"
      >
        <div className="flex h-full justify-center">
          <div className="flex-1">
            <p>logo placeholder</p>
          </div>
          <div className="flex-1">
            <HomepageCard setCurrentSection={setCurrentSection} />
          </div>
        </div>
      </div>
    </div>
  );
}
