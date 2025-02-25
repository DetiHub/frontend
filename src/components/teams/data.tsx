

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

export const teamData : TeamData = {
    "Coordenação Geral": {
        "team_leaders": [
            {
                "name": "Daniel Ferreira",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Bárbara Moreira",
                "img_src": "/teams/coordenacaoGeral/hugocorreia.png",
                "institution": path_to_neect_logo,
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Sofia Fernandes",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Hugo Correia",
                "img_src": "/teams/coordenacaoGeral/hugocorreia.png",
                "institution": path_to_nei_logo,
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
    },
    "Relações Externas": {
        "team_leaders": [
            {
                "name": "João Roldão",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "José Santos",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
        "collabs": [
            {
                "name": "Pedro Fonseca",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Diogo Couto",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Henrique Teixeira",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Catarina Gomes",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Rodrigo Caldelas",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Beatriz Francisco",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Margarida Castro",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Martim Calisto",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Luís Leal",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Sebastian González",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Lara Ribeiro",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ]
    },
    "Gestão de Plataformas": {
        "team_leaders": [
            {
                "name": "Bernardo Figueiredo",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
        "collabs": [
            {
                "name": "João Capucho",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Rúben Garrido",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ]
    },
    "Finanças": {
        "team_leaders": [
            {
                "name": "Duarte Rainho",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Gabriel Janicas",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Miguel Paiva",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
    },
    "Logistica": {
        "team_leaders": [
            {
                "name": "Regina",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Rafael Caçador",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
        ],
        "collabs": [
            {
                "name": "Carolina Prata",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Fábio Matias",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Ângela",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Tiago Pereira",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Rafael Alves",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Simão Santos",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "André Dora",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Raquel Vinagre",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "José Jordão",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Francisco Pires",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ]
    },
    "Comunicação e Marketing": {
        "team_leaders": [
            {
                "name": "Hugo Castro",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Leandro Costa",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ],
        "collabs": [
            {
                "name": "Adriana Rocha",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Madalena Diogo",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "João Marques",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Rui Machado",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Martim Santos",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Tiago Coelho",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Afonso Ferreira",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Francisco Frazão",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Isaac Lopes",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            },
            {
                "name": "Diogo Santos",
                "img_src": "<path_to_img_in_public>",
                "institution": "<path_to_institution_logo_in_public>",
                "linkedin": "https://www.linkedin.com/in/hugo-correia-3634a52a3/"
            }
        ]
    },
};