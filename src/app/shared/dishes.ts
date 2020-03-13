import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        "id": "0",
        "name": "Praiano",
        "image": "./assets/images/violante.png",
        "category": "mains",
        "featured": true,
        "label": "Hot",
        "price": "4.99",
        "description": "Violante preparado para curtir uma praia de Sanca com os amigos. Na foto, é possível perceber o estilo imensurável de nosso ídolo, ao usar boné como poucos.",
        "comments": [
            {
            "rating": 5,
            "comment": "Essa é a foto mais linda que já vi!",
            "author": "Admirador Secreto",
            "date": "2012-10-16T17:57:28.556094Z"
            },
            {
            "rating": 4,
            "comment": "Estou me sentindo no céu...",
            "author": "Nente Conto",
            "date": "2014-09-05T17:57:28.556094Z"
            },
            {
            "rating": 3,
            "comment": "Que delícia! Que delícia!",
            "author": "Papa Aquatico",
            "date": "2015-02-13T17:57:28.556094Z"
            },
            {
            "rating": 4,
            "comment": "Spielberg é liso.",
            "author": "Spielbert",
            "date": "2013-12-02T17:57:28.556094Z"
            },
            {
            "rating": 2,
            "comment": "Quero um poster desse de presente de aniversário.",
            "author": "Violover",
            "date": "2011-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        "id": "1",
        "name": "Sorriso Maroto",
        "image": "./assets/images/violante1.png",
        "category": "appetizer",
        "featured": false,
        "label": "",
        "price": "1.99",
        "description": "Criar descrição",
        "comments": [
            {
            "rating": 5,
            "comment": "Apesar de ainda estar lindo, essa não é uma das melhores fotos...",
            "author": "Singelo",
            "date": "2012-10-16T17:57:28.556094Z"
            },
            {
            "rating": 4,
            "comment": "Pensei que estava olhando para uma imagem de Deus. E não é que estava mesmo :D.",
            "author": "Ed Elarã",
            "date": "2014-09-05T17:57:28.556094Z"
            }
        ]
    },
    {
        "id": "2",
        "name": "Manequim",
        "image": "./assets/images/violante2.png",
        "category": "appetizer",
        "featured": false,
        "label": "New",
        "price": "1.99",
        "description": "Criar descrição",
        "comments": [
            {
            "rating": 5,
            "comment": "De perto é perfeito e de longe parece que está de perto.",
            "author": "Igor",
            "date": "2012-10-16T17:57:28.556094Z"
            },
            {
            "rating": 4,
            "comment": "Menó ta avançado.",
            "author": "Magui",
            "date": "2014-09-05T17:57:28.556094Z"
            },
            {
            "rating": 3,
            "comment": "Pisa menos!",
            "author": "Doba Del Rey",
            "date": "2015-02-13T17:57:28.556094Z"
            }
        ]
    },
    {
        "id": "3",
        "name": "Reflexivo",
        "image": "./assets/images/violante3.png",
        "category": "dessert",
        "featured": false,
        "label": "",
        "price": "2.99",
        "description": "Criar descrição",
        "comments": [
            {
            "rating": 5,
            "comment": "Será esse o antídoto para o coronavírus?",
            "author": "Dr Auzio Vrau Nelas",
            "date": "2012-10-16T17:57:28.556094Z"
            },
            {
            "rating": 4,
            "comment": "Agora entendi porque a UNESCO o elegeu a 8a maravilha do mundo.",
            "author": "Sans Pena",
            "date": "2014-09-05T17:57:28.556094Z"
            }
        ]
    }
];