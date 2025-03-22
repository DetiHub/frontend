export type EventType = "credenciacao" | "entrevistas" | "feira" | "palestra" | "jantar"

export interface Event {
    fullWidth: any
    id: string
    type: EventType
    title: string
    day: "wednesday" | "thursday"
    startTime: number // hour in 24h format
    endTime: number // hour in 24h format
    column: number // 1, 2, or 3
    description?: string
    speaker?: string
    company?: string
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
        title: "palestra",
        day: "wednesday",
        startTime: 13,
        endTime: 15,
        column: 4,
        description: "Inovação e Tecnologia no Mercado Atual",
        speaker: "Ana Silva",
        company: "TechBrasil",
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
        description: "Carreira e Desenvolvimento Profissional",
        speaker: "Carlos Mendes",
        company: "Consultoria Futuro",
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
        startTime: 10,
        endTime: 12,
        column: 4,
        description: "Sustentabilidade e Negócios",
        speaker: "Mariana Costa",
        company: "EcoFuture",
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
        description: "Liderança em Tempos de Mudança",
        speaker: "Rafael Oliveira",
        company: "Leadership Brasil",
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