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

  Favoris:any[];
  userID='';

  constructor(public AfAuth:AngularFireAuth,
    private router :Router,
    public firestore:AngularFirestore) {
    this.AfAuth.authState.subscribe(auth =>{

      if(!auth){
        this.router.navigate(['/login'])
      }else{
        this.userID=auth.uid;
        
      }
    })
    //this.Favoris = this.firestore.collection("favoris").valueChanges();

    this.firestore.collection("favoris").snapshotChanges().subscribe(data=>
      {
        this.Favoris = data.map(e=>{
          return{
            id : e.payload.doc.id,
            title : e.payload.doc.data()['title'],
            description : e.payload.doc.data()['description'],
            category : e.payload.doc.data()['category'],
            picture : e.payload.doc.data()['picture'],
            averageStar : e.payload.doc.data()['averageStar'],
          }
        })
      });
    
   }

  ngOnInit() {
  }

  supFavoris(id) {
    return this.firestore.collection("favoris").doc(id).delete();
  }

  

}
