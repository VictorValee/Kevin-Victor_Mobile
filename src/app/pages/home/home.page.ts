import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    Recettes:Observable<any[]>;
    userId="";


        constructor(private router: Router, 
            private route: ActivatedRoute, 
            public firestore:AngularFirestore,
            public AfAuth:AngularFireAuth
            
            ){
                this.AfAuth.authState.subscribe(auth =>{

                    if(!auth){
                      this.router.navigate(['/login'])
                    }else{
                        this.userId=auth.uid;

                    }
                  })
            
            this.Recettes = this.firestore.collection("recette").valueChanges();
            
        }

            

            //Montre les détails de la recette
            showDetails(recette){
                console.log(recette)
                this.router.navigate(['/tabs/details'],
                {queryParams:recette},
            );
            }

               //Ajoute la recette dans les favoris
   addToFavoris(details : any){
    this.firestore.collection("favoris").add({
      id_utilisateur: this.userId,
      averageStar : details.averageStar,
      title : details.title,
      description : details.description,
      picture : details.picture,
      category : details.category
    })
    this.router.navigate(['/tabs/favoris'])

        

   }



        async ngOnInit() {
    }


}