interface SectionProps {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export const Section = ({ className= "", children }: SectionProps) => {
    return (
        <div className={`relative p-16 flex justify-center min-h-screen w-full ${className}`}>
            {children}
        </div>
    );
}