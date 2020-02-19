import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
        id: '0',
        name: 'Gargamel',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        featured: true,
        label: 'Hot',
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'Combinação única de sabores. Acompanha uma pitada de singelo.',
        comments: [
            {
                rating: 5,
                comment: 'Spielberg é liso.',
                author: 'Spielbert',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Canibal alegre, ide urinai.',
                author: 'Braga',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Abbadead.',
                author: 'Defunto Autor',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimato Borges.',
                author: 'Jason Bourne',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Papa Aquatico ta de olho em nós.',
                author: 'MC Rodolfinho',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        name: 'Garay',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        featured: false,
        label: '',
        price: '1.99',
        description: 'O pior prato que você irá comer. Aconselhamos não chegar nem perto.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        name: 'Mordida de Vander',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'Como posso explicar esse prato? Não sei......',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '3',
        name: 'Filhote de Tiraptirum',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        featured: false,
        label: '',
        price: '2.99',
        description: 'Filhotin de tiraptirum recém nascido assado nas brasas do vulcão Kilauea',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];