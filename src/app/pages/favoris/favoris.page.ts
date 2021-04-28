import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  Favoris:Observable<any[]>;

  constructor(public AfAuth:AngularFireAuth,
    private router :Router,
    public firestore:AngularFirestore) {
    this.AfAuth.authState.subscribe(auth =>{

      if(!auth){
        this.router.navigate(['/login'])
      }
    })
    this.Favoris = this.firestore.collection("favoris").valueChanges();


   }

  ngOnInit() {
  }

  supFavoris(id_recette : any){
    return this.firestore.collection('favoris').doc(id_recette).delete()
  }

  

}
