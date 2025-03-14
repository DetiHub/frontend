interface SectionProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export const Section = ({ className= "", children }: SectionProps) => {
    return (
        <div className={`relative p-8 space-y-16 md:space-y-0 md:p-16  flex flex-col md:flex-row items-center justify-center min-h-screen w-full ${className}`}>
            {children}
        </div>
    );
}