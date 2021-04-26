import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-frigo',
  templateUrl: './frigo.page.html',
  styleUrls: ['./frigo.page.scss'],
})
export class FrigoPage implements OnInit {
    Ingredients: Observable<any[]>;
  


  constructor(public firestore:AngularFirestore) {

    this.Ingredients = this.firestore.collection("ingredient").valueChanges();

   }

  async ngOnInit() {
  }

}