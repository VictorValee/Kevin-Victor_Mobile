import { AbstractType, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FavorisRecette } from '../../interfaces/favoris-recette';
import { element } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],

})
export class DetailsPage implements OnInit {

details:any=[];
userId="";

  constructor(public route:ActivatedRoute, 
    private storage:NativeStorage,
    public AfAuth:AngularFireAuth
    ){
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.details = data;
    })
    }
   //Ajoute la recette dans les favoris
   addToFavoris(details : any){
        

   }

   


  ngOnInit() {
  
  }

}
