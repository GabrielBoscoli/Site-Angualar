import { Component, OnInit } from '@angular/core';

const DISH = {
  id: '0',
  name: 'Uthappizza',
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
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;

  constructor() { }

  ngOnInit() {
  }

}
