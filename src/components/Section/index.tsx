import { forwardRef } from "react";

interface SectionProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    id?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className = "", children, id }, ref) => {
        return (
            <section 
                ref={ref}
                id={id} 
                className={`relative p-8 space-y-16 md:space-y-0 md:p-16 flex flex-col md:flex-row items-center justify-center min-h-screen w-full ${className}`}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";