import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Gargamel',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'Combinação única de sabores. Acompanha uma pitada de singelo.'
    },
    {
      id: '1',
      name: 'Garay',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'O pior prato que você irá comer. Aconselhamos não chegar nem perto.'
    },
    {
      id: '2',
      name: 'Mordida do Vander',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'Como posso explicar esse prato? Não sei......'
    },
    {
      id: '3',
      name: 'Filhote de Tiraptirum',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'Filhotin de tiraptirum recém nascido assado nas brasas do vulcão Kilauea'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}
