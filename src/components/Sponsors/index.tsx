import { sponsorsData } from './data';
import SponsorCarrousel from './SponsorCarrousel';

export const Sponsors = () => {
    const data = sponsorsData.sponsors;

    const mainSponsor = data.filter((sponsor) => sponsor.rank === 0);
    const goldSponsors = data.filter((sponsor) => sponsor.rank === 1);
    const silverSponsors = data.filter((sponsor) => sponsor.rank === 2);
    const bronzeSponsors = data.filter((sponsor) => sponsor.rank === 3);
    return (
        <div className="flex flex-col w-full space-y-16 justify-center items-center">
            <span className="text-4xl md:text-5xl font-bold text-foreground">Sponsors</span>
            <div className="flex flex-col justify-center items-center space-y-16">
                <h1 className="text-4xl font-bold">Main Sponsor</h1>
                <a href={mainSponsor[0].url} target="_blank" rel="noreferrer">
                    <img src={mainSponsor[0].logo} alt={mainSponsor[0].name} className='max-w-full h-auto' />
                </a>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="text-3xl font-bold">Gold Sponsors</h1>
                <div className="flex md:px-32 flex-col md:flex-row 8 items-center justify-center md:space-x-16">
                    {goldSponsors.map((sponsor) => (
                        <div className='flex-1'>
                            <a href={sponsor.url} target="_blank" rel="noreferrer">
                                <img src={sponsor.logo} alt={sponsor.name} className='w-full' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <h1 className="text-2xl  font-bold">Silver & Bronze Sponsors</h1>
                    <div className='flex flex-col space-y-2 justify-center items-center'>
                        <SponsorCarrousel sponsors={silverSponsors} />
                        <SponsorCarrousel sponsors={bronzeSponsors} right={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}