

interface Team {
    team_leaders: {
      name: string
      img_src: string
      institution: string
      linkedin: string
    }[]
    collabs?: {
      name: string
      img_src: string
      institution: string
      linkedin: string
    }[]
  }
  
  type TeamData = Record<string, Team>

const path_to_nei_logo = "/institutions/nei.png";
const path_to_neect_logo = "/institutions/neect.png";
const path_to_neeeta_logo = "/institutions/neeeta.png";
const path_to_aettua_logo = "/institutions/aettuaa_preto.svg";

const coordenacaoGeralPath = "/teams/coordenacaoGeral";
const relacoesExternasPath = "/teams/relacoesExternas";
const gestaoPlataformasPath = "/teams/gestaoPlataformas";
const financasPath = "/teams/financas";
const logisticaPath = "/teams/logistica";
const comunicacaoMarketingPath = "/teams/comunicacaoMarketing";


export const teamData : TeamData = {
    "Coordenação Geral": {
        "team_leaders": [
            {
                "name": "Daniel Ferreira",
                "img_src": "<path_to_img_in_public>",
                "institution": path_to_aettua_logo,
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Bárbara Moreira",
                "img_src": coordenacaoGeralPath + "/BarbaraMoreira.JPG",
                "institution": path_to_neect_logo,
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Sofia Fernandes",
                "img_src": coordenacaoGeralPath + "/SofiaFernandes.JPG",
                "institution": path_to_neeeta_logo,
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Hugo Correia",
                "img_src": coordenacaoGeralPath + "/HugoCorreia.JPG",
                "institution": path_to_nei_logo,
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
    },
    "Relações Externas": {
        "team_leaders": [
            {
                "name": "João Roldão",
                "img_src": relacoesExternasPath + "/JoaoRoldao.JPG",
                "institution": path_to_aettua_logo,
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "José Santos",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ],
        "collabs": [
            {
                "name": "Pedro Fonseca",
                "img_src": relacoesExternasPath + "/PedroFonseca.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Diogo Couto",
                "img_src": relacoesExternasPath + "/DiogoCouto.jpeg",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Henrique Teixeira",
                "img_src": relacoesExternasPath + "/HenriqueTeixeira.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Catarina Gomes",
                "img_src": relacoesExternasPath + "/CatarinaGomes.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Rodrigo Caldelas",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Beatriz Francisco",
                "img_src": relacoesExternasPath + "/BeatrizFrancisco.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Margarida Castro",
                "img_src": relacoesExternasPath + "/MargaridaCastro.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Martim Calisto",
                "img_src": relacoesExternasPath + "/MartimCalisto.png",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Luís Leal",
                "img_src": relacoesExternasPath + "/LuisLeal.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Sebastian González",
                "img_src": relacoesExternasPath + "/SebastianGonzalez.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Lara Ribeiro",
                "img_src": relacoesExternasPath + "/LaraRibeiro.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ]
    },
    "Gestão de Plataformas": {
        "team_leaders": [
            {
                "name": "Bernardo Figueiredo",
                "img_src": gestaoPlataformasPath + "/BernardoFigueiredo.JPG",
                "institution": path_to_nei_logo,
                "linkedin": "https://www.linkedin.com/in/leikrad"
            }
        ],
    },
    "Finanças": {
        "team_leaders": [
            {
                "name": "Duarte Rainho",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Gabriel Janicas",
                "img_src": financasPath + "/GabrielJanicas.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Miguel Paiva",
                "img_src": financasPath + "/MiguelPaiva.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ],
    },
    "Logistica": {
        "team_leaders": [
            {
                "name": "Regina",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Rafael Caçador",
                "img_src": logisticaPath + "/RafaelCacador.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
        ],
        "collabs": [
            {
                "name": "Carolina Prata",
                "img_src": logisticaPath + "/CarolinaPrata.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Fábio Matias",
                "img_src": logisticaPath + "/FabioMartins.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Ângela Ribeiro",
                "img_src": logisticaPath + "/AngelaRibeiro.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Tiago Pereira",
                "img_src": logisticaPath + "/TiagoPereira.jpeg",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Rafael Alves",
                "img_src": logisticaPath + "/RafaelAlves.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Simão Santos",
                "img_src": logisticaPath + "/SimaoSantos.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "André Dora",
                "img_src": logisticaPath + "/AndreDora.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Raquel Vinagre",
                "img_src": logisticaPath + "/RaquelVinagre.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "José Jordão",
                "img_src": logisticaPath + "/JoseJordao.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Francisco Pires",
                "img_src": logisticaPath + "/FranciscoPires.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ]
    },
    "Comunicação e Marketing": {
        "team_leaders": [
            {
                "name": "Hugo Castro",
                "img_src": comunicacaoMarketingPath + "/HugoCastro.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Leandro Costa",
                "img_src": comunicacaoMarketingPath + "/LeandroCosta.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ],
        "collabs": [
            {
                "name": "Adriana Rocha",
                "img_src": comunicacaoMarketingPath + "/AdrianaRocha.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Madalena Diogo",
                "img_src": comunicacaoMarketingPath + "/MadalenaDiogo.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "João Marques",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Rui Machado",
                "img_src": comunicacaoMarketingPath + "/RuiMachado.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Martim Santos",
                "img_src": comunicacaoMarketingPath + "/MartimSantos.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Tiago Coelho",
                "img_src": comunicacaoMarketingPath + "/TiagoCoelho.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Afonso Ferreira",
                "img_src": comunicacaoMarketingPath + "/AfonsoFerreira.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Francisco Frazão",
                "img_src": comunicacaoMarketingPath + "/FranciscoFrazao.JPG",   
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Isaac Lopes",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            },
            {
                "name": "Diogo Santos",
                "img_src": comunicacaoMarketingPath + "/DiogoSantos.JPG",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/"
            }
        ]
    },
};