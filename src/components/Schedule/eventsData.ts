import { ISponsorsData } from "../Sponsors/types"

export type EventType = "credenciacao" | "entrevistas" | "feira" | "palestra" | "jantar"

export interface Event {
    fullWidth: unknown
    id: string
    type: EventType
    title: string
    day: "wednesday" | "thursday"
    startTime: number // hour in 24h format
    endTime: number // hour in 24h format
    column: number // 1, 2, or 3
    description?: string
    speaker?: string
    speakerDescription?: string
    company?: string
    logo?: string
}

//extend ISponsorsData to Event
export interface SponsorsInterviews extends ISponsorsData {
    sponsors: {
        name: string
        logo: string
        url: string
        rank: number
        room: string
    }[] 
}

export const eventsData: Event[] = [
    // Wednesday events
    {
        id: "w1",
        type: "credenciacao",
        title: "credenciação",
        day: "wednesday",
        startTime: 9,
        endTime: 16,
        column: 1,
        fullWidth: undefined
    },
    {
        id: "w2",
        type: "entrevistas",
        title: "entrevistas",
        day: "wednesday",
        startTime: 9,
        endTime: 15,
        column: 2,
        description: "Entrevistas de recrutamento com empresas parceiras.",
        company: "Empresas Diversas",
        fullWidth: undefined
    },
    {
        id: "w3",
        type: "entrevistas",
        title: "entrevistas",
        day: "wednesday",
        startTime: 16,
        endTime: 19,
        column: 2,
        description: "Continuação das entrevistas de recrutamento.",
        company: "Empresas Diversas",
        fullWidth: undefined
    },
    {
        id: "w4",
        type: "feira",
        title: "feira de empresas",
        day: "wednesday",
        startTime: 12,
        endTime: 18,
        column: 3,
        description: "Conheça as empresas participantes e suas oportunidades.",
        company: "Múltiplas Empresas",
        fullWidth: undefined
    },
    {
        id: "w5",
        type: "palestra",
        title: "Desafio Espacial: Inovação e Empreendedorismo",
        day: "wednesday",
        startTime: 15,
        endTime: 17,
        column: 4,
        description: "Os desafios invisíveis da construção de software real time e mission critical, no mundo das telecomunicações - Explore as complexidades e soluções por trás das redes que nunca podem falhar",
        speaker: "Eng. Carlos Rodrigues",
        company: "Genius Partnership",
        logo: "sponsors/geniuspartner.png",
        fullWidth: undefined
    },
    {
        id: "w6",
        type: "palestra",
        title: "palestra",
        day: "wednesday",
        startTime: 17,
        endTime: 19,
        column: 4,
        description: "Brevemente anunciado",
        speaker: "Brevemente anunciado",
        company: "Siroco",
        logo:"sponsors/siroco.svg",
        fullWidth: undefined
    },
  
    // Thursday events
    {
        id: "t1",
        type: "credenciacao",
        title: "credenciação",
        day: "thursday",
        startTime: 9,
        endTime: 16,
        column: 1,
        fullWidth: undefined
    },
    {
        id: "t2",
        type: "entrevistas",
        title: "entrevistas",
        day: "thursday",
        startTime: 9,
        endTime: 15,
        column: 2,
        description: "Entrevistas de recrutamento com empresas parceiras.",
        company: "Empresas Diversas",
        fullWidth: undefined
    },
    {
        id: "t3",
        type: "entrevistas",
        title: "entrevistas",
        day: "thursday",
        startTime: 16,
        endTime: 19,
        column: 2,
        description: "Continuação das entrevistas de recrutamento.",
        company: "Empresas Diversas",
        fullWidth: undefined
    },
    {
        id: "t4",
        type: "feira",
        title: "feira de empresas",
        day: "thursday",
        startTime: 12,
        endTime: 18,
        column: 3,
        description: "Conheça as empresas participantes e suas oportunidades.",
        company: "Múltiplas Empresas",
        fullWidth: undefined
    },
    {
        id: "t5",
        type: "palestra",
        title: "palestra",
        day: "thursday",
        startTime: 11,
        endTime: 13,
        column: 4,
        description: "Resolução de um desafio com temas relacionados com o espaço. O objetivo é encontrar uma solução para o problema colocado, focando também na economia espacial e no empreendedorismo.",
        speaker: "Joana Mingacho",
        speakerDescription: "Gestora de projetos de inovação; Mestre em Engenharia Física.",
        company: "Instituto Pedro Nunes",
        logo: "sponsors/ipn.png",
        fullWidth: undefined
    },
    {
        id: "t6",
        type: "palestra",
        title: "palestra",
        day: "thursday",
        startTime: 16,
        endTime: 18,
        column: 4,
        description: "Brevemente anunciado",
        speaker: "Brevemente anunciado",
        company: "Critical Software",
        logo: "sponsors/critical.png",
        fullWidth: undefined
    },
    {
        id: "t7",
        type: "jantar",
        title: "jantar empresarial",
        day: "thursday",
        startTime: 20,
        endTime: 22,
        column: 4,
        fullWidth: undefined
    },
  ]

  export const sponsorsWednesday: ISponsorsData = {
    sponsors: [
        {
            name: "InovaRia Agenda MicroEletrónica",
            logo: "sponsors/inovaria.png",
            url: "https://inova-ria.pt/",
            rank: 0
        },
        {
            name: "Siroco",
            logo: "sponsors/siroco.svg",
            url: "https://siroco.com.pt/pt-pt/",
            rank: 1
        },
        {
            name: "Withus",
            logo: "sponsors/withus.png",
            url: "https://www.withus.pt",
            rank: 1
        },
        {
            name: "Genius Partnership (InovaRia + AlticeLabs)",
            logo: "sponsors/geniuspartner.png",
            url: "https://www.alticelabs.com/",
            rank: 1
        },
        {
            name: "Deloitte",
            logo: "sponsors/deloitte.png",
            url: "https://www.deloitte.com/pt/pt.html",
            rank: 2
        },
        {
            name: "Spin & Turn",
            logo: "sponsors/spin&turn.png",
            url: "https://www.spinandturn.com/",
            rank: 2
        },
        {
            name: "Synopsis",
            logo: "sponsors/synopsis.svg",
            url: "https://www.synopsis.pt/",
            rank: 2
        },
        {
            name: "AeroProtechnik",
            logo: "sponsors/aeroprotechnik.png",
            url: "https://www.aeroprotechnik.com/",
            rank: 2
        },
        {
            name: "Glintt Global",
            logo: "sponsors/GG.png",
            url: "https://www.glinttglobal.com/",
            rank: 2
        },
        {
            name: "Huf Portuguesa",
            logo: "sponsors/huf.svg",
            url: "https://www.huf-group.com/en",
            rank: 2
        },
    ]
};

export const sponsorsThursday: ISponsorsData = {
    sponsors: [
        {
            name: "InovaRia Agenda MicroEletrónica",
            logo: "sponsors/inovaria.png",
            url: "https://inova-ria.pt/",
            rank: 0
        },
        {
            name: "Siroco",
            logo: "sponsors/siroco.svg",
            url: "https://siroco.com.pt/pt-pt/",
            rank: 1
        },
        {
            name: "Withus",
            logo: "sponsors/withus.png",
            url: "https://www.withus.pt",
            rank: 1
        },
        {
            name: "Genius Partnership (InovaRia + AlticeLabs)",
            logo: "sponsors/geniuspartner.png",
            url: "https://www.alticelabs.com/",
            rank: 1
        },
        {
            name: "Sky Portugal",
            logo: "sponsors/skyportugal.png",
            url: "https://www.sky.com/",
            rank: 2
        },
        {
            name: "Accenture",
            logo: "sponsors/accenture.png",
            url: "https://www.accenture.com/pt-pt",
            rank: 2
        },
        {
            name: "CriticalSoftware",
            logo: "sponsors/critical.png",
            url: "https://criticalsoftware.com/en",
            rank: 2
        },
        {
            name: "PicAdvanced",
            logo: "sponsors/pic.png",
            url: "https://picadvanced.com/",
            rank: 2
        },
        {
            name: "Instituto Pedro Nunes",
            logo: "sponsors/ipn.png",
            url: "https://www.ipn.pt/",
            rank: 3
        }
    ]
};

export const sponsorsInterviewMorningWednesday: SponsorsInterviews = {
    sponsors: [
        {
            name: "Genius Partnership (InovaRia + AlticeLabs)", 
            logo: "sponsors/geniuspartner.png",
            url: "https://www.alticelabs.com/",
            rank: 0,
            room: "4.2.01"
        },
        {
            name: "Withus",
            logo: "sponsors/withus.png",
            url: "https://www.withus.pt",
            rank: 1,
            room: "4.2.04"
        },
        {
            name: "Synopsis",
            logo: "sponsors/synopsis.svg",
            url: "https://www.synopsis.pt/",
            rank: 1,
            room: "4.2.06"
        },
    ]
};

export const sponsorsInterviewAfternoonWednesday: SponsorsInterviews = {
    sponsors: [
        {
            name: "Genius Partnership (InovaRia + AlticeLabs)", 
            logo: "sponsors/geniuspartner.png",
            url: "https://www.alticelabs.com/",
            rank: 0,
            room: "4.2.01"
        },
        {
            name: "Deloitte",
            logo: "sponsors/deloitte.png",
            url: "https://www.deloitte.com/pt/pt.html",
            rank: 1,
            room: "4.2.06"
        },
    ]
};

