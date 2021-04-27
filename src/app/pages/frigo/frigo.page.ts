import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-frigo',
  templateUrl: './frigo.page.html',
  styleUrls: ['./frigo.page.scss'],
})
export class FrigoPage implements OnInit {
    Ingredients: Observable<any[]>;
  


  constructor(public firestore:AngularFirestore,
    public AfAuth:AngularFireAuth,
    private router :Router
    ) {

    this.AfAuth.authState.subscribe(auth =>{

      if(!auth){
        this.router.navigate(['/login'])
      }
    })

    this.Ingredients = this.firestore.collection("ingredient").valueChanges();

   }

  async ngOnInit() {
  }

}