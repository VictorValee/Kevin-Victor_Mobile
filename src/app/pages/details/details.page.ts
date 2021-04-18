import { AbstractType, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FavorisRecette } from '../../interfaces/favoris-recette';
import { element } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],

})
export class DetailsPage implements OnInit {

details:any=[];

  constructor(public route:ActivatedRoute, private storage:NativeStorage) {
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.details = data;

    })
   }

   //Ajoute la recette dans les favoris
   addToFavoris(details : any){
     //Creation de la variable
     let ajouter : boolean = false;
     this.storage.getItem("uneRecette").then((data:FavorisRecette[])=>{
            
      //Si il y a rien dans les favoris
      if(data === null || data.length == 0){
        
      //Initialisation du tableau data
        data = [];
        
      //Ajoute dans les favoris
      data.push({
        item : details
      })

      }else{// Sinon

        //Parcourir les favoris
        for (let i = 0; i<data.length; i++){
          const element : FavorisRecette = data[i];
          if(details.id===element.item.id){
            //Si les favoris n'est pas vide et contien la recette
            ajouter=true;
          }
        }
        if(!ajouter){
          data.push({
            item : details
          })
        }

      }
      this.storage.setItem("uneRecette",data);
    });
     
     

   }

   


  ngOnInit() {
  
  }

}
