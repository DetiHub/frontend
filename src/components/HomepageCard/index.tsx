import { Link } from "@tanstack/react-router";
import { eventDescription } from "./data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// 

export const HomepageCard = () => {
  const forms_url = "https://forms.gle/G2USdGq1XtKdcTaR9";
  const eventLines = eventDescription.split("\n");
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMobile();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full rounded-md border border-gray-100 bg-gray-600 bg-opacity-10 shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)] bg-clip-padding backdrop-blur-xl backdrop-filter"
    >
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div className="px-8 pt-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pb-2 text-center text-5xl font-semibold"
          >
            Descrição do Evento
          </motion.h3>
          <div className={cn(
            "relative",
            isMobile && !isExpanded && "max-h-[200px] overflow-hidden"
          )}>
            {eventLines.map((line, index) => (
              <motion.p 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-xl mb-4"
              >
                {line}
              </motion.p>
            ))}
            {isMobile && !isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/30 to-transparent" />
            )}
          </div>
          {isMobile && (
            <Button 
              variant="ghost" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mt-2 mb-2 text-black hover:bg-gray-600/10"
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
            </Button>
          )}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex w-full items-center h-16 justify-around space-x-2"
        >
          {/* <Button
            className="w-full hover:bg-slate-800"
          >
          Schedule
        </Button> */}
          <Button asChild className="w-fit px-8 h-full text-2xl font-bold text-background bg-lime-500 hover:bg-lime-600">
            <Link to={forms_url}>Submeter CV</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
