import { createLazyFileRoute } from "@tanstack/react-router";

// import { TeamSection } from "@/components/Teams";
import { HomepageCard } from "@/components/HomepageCard";
import { Section } from "@/components/Section";
import { Sponsors } from "@/components/Sponsors";
import Waves from "@/components/Waves";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // const scheduleRef = useRef<HTMLDivElement>(null);

  // const scrollToScheduleSection = () => {
  //   // if (scheduleRef.current) {
  //   //   scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
  //   // }
  // };

  return (
    <>
      <Waves
        lineColor="rgba(44, 44, 44, 0.62)"
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
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-25"></div>
      <main
        className="overflow-y-scroll h-screen"
        style={{
          background: `
              radial-gradient(120.85% 71.24% at 80.08% 1.48%, #92d400 0%, rgba(0,0,0,0) 100%),
              radial-gradient(77.85% 61.24% at 20.08% 98.48%, #92d400 0%, rgba(0,0,0,0) 100%)
            `,
        }}>
        <Section>
          <div className="flex flex-[6] h-full max-w-full items-center justify-center">
            <img
              src="logo_vertical_cores-crop.svg"
              alt="Logo"
              className="w-screen"
            />
          </div>
          <div className="flex flex-[3] items-center min-h-fit">
            <HomepageCard />
          </div>
        </Section>
        {/* <Section>
          <div ref={scheduleRef} />
          <TeamSection />
        </Section> */}
        {/* <Section>
          test
        </Section> */}
        <Section>
          <Sponsors />
        </Section>
      </main>
    </>
  );
}