import { createLazyFileRoute } from "@tanstack/react-router";

// import { TeamSection } from "@/components/Teams";
import { HomepageCard } from "@/components/HomepageCard";
import { Section } from "@/components/Section";
import { Sponsors } from "@/components/Sponsors";
import Waves from "@/components/Waves";
import { EventSchedule } from "@/components/Schedule";
//import DETIPlant from "@/components/DETIPlant";
import { SectionIndicator } from "@/components/SectionIndicator";
import { useActiveSection } from "@/hooks/use-active-section";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TeamSection } from "@/components/Teams";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const sections = [
  "Início",
  "Horário",
  "DETI",
  "Empresas"
] as const;

function Index() {
  const inicioRef = useRef<HTMLDivElement>(null);
  const empresasRef = useRef<HTMLDivElement>(null);
  const horarioRef = useRef<HTMLDivElement>(null);
  const detiRef = useRef<HTMLDivElement>(null);

  const activeSection = useActiveSection(sections, {
    inicioRef: inicioRef as React.RefObject<HTMLDivElement>,
    horarioRef: horarioRef as React.RefObject<HTMLDivElement>,
    detiRef: detiRef as React.RefObject<HTMLDivElement>,
    empresasRef: empresasRef as React.RefObject<HTMLDivElement>
  });

  return (
    <>
      <Waves
        lineColor="rgba(255, 255, 255, 0.8)"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.03}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={0}
        xGap={12}
        yGap={12}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <SectionIndicator sections={sections} activeSection={activeSection} />
      <main
        className="overflow-y-scroll h-screen"
        style={{
          background: `
              radial-gradient(120.85% 71.24% at 80.08% 1.48%, #92d400 0%, rgba(0,0,0,0) 100%),
              radial-gradient(77.85% 61.24% at 20.08% 98.48%, #92d400 0%, rgba(0,0,0,0) 100%)
            `,
        }}
        id="main">
        <Section ref={inicioRef} id="inicio">
          <div className="flex flex-col md:flex-row w-full h-full">
            <motion.div 
              className="flex flex-[6] h-full max-w-full items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.img
                src="logo_vertical_cores-crop.svg"
                alt="Logo"
                className="w-screen"
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </motion.div>
            <div className="flex flex-[3] items-center min-h-fit">
              <HomepageCard />
            </div>
          </div>
        </Section>
        <Section ref={horarioRef} id="horario">
          <EventSchedule />
        </Section>
        <Section ref={detiRef} id="deti">
          <TeamSection />
        </Section>
        <Section ref={empresasRef} id="empresas">
          <Sponsors />
        </Section>
      </main>
    </>
  );
}