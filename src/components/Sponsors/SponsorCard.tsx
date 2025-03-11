import { ISponsor } from './types'

interface SponsorCardProps {
    sponsor: ISponsor;
    className?: string;
}

export default function SponsorCard({ className="", sponsor }: SponsorCardProps) {
    return (
        <div className={`w-fit ${className}`}>
            <a href={sponsor.url} target="_blank" rel="noreferrer">
                <img src={sponsor.logo} alt={sponsor.name} className='object-contain h-32 max-w-32' />
            </a>
        </div>
    )
}