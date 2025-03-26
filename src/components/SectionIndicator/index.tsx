import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { type SectionName } from "@/hooks/use-active-section";
import { useEffect, useState } from "react";

interface SectionIndicatorProps {
  sections: readonly SectionName[];
  activeSection: SectionName;
}

const sectionToId: Record<SectionName, string> = {
  "Início": "inicio",
  "Empresas": "empresas",
  "Horário": "horario",
  "DETI": "deti"
};

export const SectionIndicator = ({ sections, activeSection }: SectionIndicatorProps) => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    setShowIndicator(true);
    const timer = setTimeout(() => setShowIndicator(false), 2000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleClick = (section: SectionName) => {
    const element = document.getElementById(sectionToId[section]);
    const scroller = document.getElementById("main");
    if (element) {
      const elementTop = element.offsetTop;
      console.log(elementTop);
      scroller?.scrollTo({
        top: elementTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 hidden md:flex">
      <div className="relative flex flex-col gap-6 items-center bg-gray-600/5 backdrop-blur-xl p-3 rounded-full">
        {sections.map((section) => (
          <div 
            key={section} 
            className="relative flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleClick(section)}
          >
            {/* Section change indicator */}
            <AnimatePresence>
              {showIndicator && activeSection === section && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-8 bg-gray-600/10 backdrop-blur-xl px-3 py-1 rounded-md text-sm font-semibold whitespace-nowrap"
                >
                  {section}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Label that appears on hover */}
            <div className="absolute left-8 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
              <div className="bg-gray-600/10 backdrop-blur-xl px-3 py-1 rounded-md text-sm">
                {section}
              </div>
            </div>

            {/* Line/Circle */}
            <motion.div
              className={cn(
                "w-1 rounded-full transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:rounded-full",
                activeSection === section ? "bg-lime-400" : "bg-slate-800/20"
              )}
              initial={{ height: 16 }}
              animate={{ 
                height: activeSection === section ? 24 : 16
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 