import { Ingredient } from './../../interfaces/ingredient';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-frigo',
  templateUrl: './frigo.page.html',
  styleUrls: ['./frigo.page.scss'],
})
export class FrigoPage implements OnInit {

  Ingredients:any[];

  constructor() {

    this.Ingredients=[{

      title : " Banane",
      category : "Fruit",
      picture : ['assets/img/Ingredients/banane.jpg']
      },
      {
      title : " Boeuf",
      category : "Viande",
      picture : ['assets/img/Ingredients/boeuf.jpg']
      ,},
      {
        title : " Carotte",
        category : "Légume",
        picture : ['assets/img/Ingredients/carotte.jpg']
        ,},

      {
        title : " Fraise",
        category : "Fruit",
        picture : ['assets/img/Ingredients/fraise.jpg']
      ,}

      
    
    
    
    
    ]


   }

  ngOnInit() {
  }

}
