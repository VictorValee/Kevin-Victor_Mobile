import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

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
    public firestore:AngularFirestore,
    public alertController:AlertController) {
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

  async supFavoris(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Voulez-vous enlever cette recette dans vos favoris ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
          }
        }, {
          text: 'Oui',
          handler: () => {
            this.firestore.collection("favoris").doc(id).delete();          }
        }
      ]
    });

    await alert.present();
    
  }

  

}
