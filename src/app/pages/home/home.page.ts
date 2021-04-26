import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    Recettes:Observable<any[]>;

        constructor(private router: Router, 
            private route: ActivatedRoute, 
            public firestore:AngularFirestore,
            
            ) {
            
            this.Recettes = this.firestore.collection("recette").valueChanges();}

            

            //Montre les détails de la recette
            showDetails(recette){
                console.log(recette)
                this.router.navigate(['/details'],
                {queryParams:recette},
            );
            }



        async ngOnInit() {
    }


}