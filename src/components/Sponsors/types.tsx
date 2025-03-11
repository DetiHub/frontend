interface ISponsorsData {
    sponsors: ISponsor[];
}

interface ISponsor {
    name: string;
    logo: string;
    url: string;
    rank: number;
}

export type { ISponsorsData, ISponsor };