import { forwardRef } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
    id?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className = "", children, id }, ref) => {
        return (
            <motion.section 
                ref={ref}
                id={id} 
                className={`relative p-8 space-y-16 md:space-y-0 md:p-16 flex flex-col md:flex-row items-center justify-center min-h-screen w-full ${className}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.section>
        );
    }
);

Section.displayName = "Section";