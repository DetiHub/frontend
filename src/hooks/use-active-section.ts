import { useState, useEffect, RefObject } from "react";

interface SectionRefs {
  inicioRef: RefObject<HTMLDivElement>;
  empresasRef: RefObject<HTMLDivElement>;
  horarioRef: RefObject<HTMLDivElement>;
  detiRef: RefObject<HTMLDivElement>;
}

export type SectionName = "Início" | "Empresas" | "Horário" | "DETI";

export const useActiveSection = (sections: readonly SectionName[], refs: SectionRefs) => {
  const [activeSection, setActiveSection] = useState<SectionName>(sections[0]);

  useEffect(() => {
    // Create an Intersection Observer to track which sections are visible
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // More granular thresholds
    };
    
    const visibilitySections = new Map<SectionName, number>();
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        // Map the DOM id to the section name
        const sectionMap: Record<string, SectionName> = {
          'inicio': 'Início',
          'empresas': 'Empresas',
          'horario': 'Horário',
          'deti': 'DETI'
        };
        
        const sectionName = sectionMap[id] as SectionName;
        
        if (sectionName) {
          if (entry.isIntersecting) {
            visibilitySections.set(sectionName, entry.intersectionRatio);
          } else {
            visibilitySections.set(sectionName, 0);
          }
          
          // Find the section with the highest visibility
          let maxRatio = 0;
          let maxSection: SectionName = sections[0];
          
          visibilitySections.forEach((ratio, section) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              maxSection = section;
            }
          });
          
          // Only update if we actually have an intersecting section
          if (maxRatio > 0) {
            setActiveSection(maxSection);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all section elements
    const refMap: Record<SectionName, RefObject<HTMLDivElement>> = {
      "Início": refs.inicioRef,
      "Empresas": refs.empresasRef,
      "Horário": refs.horarioRef,
      "DETI": refs.detiRef
    };
    
    sections.forEach(section => {
      const element = refMap[section].current;
      if (element) {
        observer.observe(element);
        visibilitySections.set(section, 0);
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, [sections, refs]);

  return activeSection;
};