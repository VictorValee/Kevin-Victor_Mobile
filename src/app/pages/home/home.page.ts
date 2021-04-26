import { DetailsPage } from './../details/details.page';
import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { FeedsService } from '../../services/feeds.service';
import { ArticleFeed } from '../../interfaces/article-feed';
import { Recette } from '../../interfaces/recette';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    Recettes:any [];

        constructor(private router: Router, 
            private route: ActivatedRoute, ) {
        
            //On simule le fait que les recettes provienent d'une base de données
            this.Recettes=[{
                id :1,
                title : "L'omelette de la mère",
                description :"Omelette façon mère Poulard, spécialité du mont st Michel omelette légère et originale, facile et rapide, bien mousseuse.",
                category : "Oeuf",
                createAt : new Date(),
                averageStar : 4, 
                picture : 'assets/img/recettes/oeuf1.jpg'}
                ,{
                id :2,
                title : "Poêlée d'épinards frais au beurre",
                description :"Découvrez notre recette facile et rapide de poêlée d'épinards frais au beurre",
                category : "Recette traditionnelle",
                createAt : new Date(),
                averageStar : 5, 
                picture : 'assets/img/recettes/rt1.jpg'
                }
                 ,{
                id :3,
                title : "Poulet Yassa",
                description :"Le yassa est un plat sénégalais à base d'oignons frits et de riz et qui peut être accompagné de viande marinée dans le citron puis frite ou braisée, de poulet ou de poisson. ",
                category : "Poulet",
                createAt : new Date(),
                averageStar : 3, 
                picture : 'assets/img/recettes/yassa.jpg'
                }
                 ,{
                id :4,
                title : "Crème au chocolat light",
                description :"Une recette de crème au chocolat maison, bien meilleur et saine que celles des grandes surfaces.",
                category : "Crème",
                createAt : new Date(),
                averageStar : 2, 
                picture : 'assets/img/recettes/chocolat.jpg'
                }
                 ,{
                id :5,
                title : "Potatoes maison aux épices",
                description :"Découvrez notre recette facile et rapide de potatoes maison aux épice",
                category : "Pomme de terre",
                createAt : new Date(),
                averageStar : 5, 
                picture : 'assets/img/recettes/patatoes.jpg'
                }
            ]}

            

            //Montre les détails de la recette
            showDetails(recette){
                console.log(recette)
                this.router.navigate(['/details'],
                {queryParams:recette},
            );
            }



        async ngOnInit() {
        /*this.feeds = await this.feed.requestByUrlTrashTalk()*/
    }


}