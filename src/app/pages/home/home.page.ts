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

    /*
    feeds: ArticleFeed[];

    pictures: string[] = [
        "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fallucanheat.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F164213930-850x560.jpeg",
        "https://static.lexpress.fr/medias_9602/w_640,h_358,c_fill,g_center/v1402301648/la-star-du-miami-heat-lebron-james-g-face-a-tim-duncan-lors-du-match-n-2-de-la-finale-nba-face-aux-spurs-le-8-juin-2014-a-san-antonio_4916337.jpg",
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2012/10/29/905472-19946209-2560-1440.jpg",
        "https://static.lexpress.fr/medias_9606/w_1000,h_563,c_fill,g_north/v1402563434/lebron-james-des-miami-heat-et-boris-diaw-des-san-antonio-spurs-a-la-lutte-lors-du-match-2-de-la-finale-de-nba-le-8-juin-2014-a-san-antonio-au-texas_4918711.jpg",
        "http://www.slate.fr/sites/default/files/styles/1200x680/public/parker_0.jpg"
    ]
    */

        constructor(private router: Router, 
            private route: ActivatedRoute, 
            /*private feed: FeedsService*/) {
        
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


/*
        ionViewWillEnter() {
        console.log("ionViewWillEnter");

        this.router.events.subscribe(async(event) => {
            if (event instanceof NavigationEnd) {
                this.feeds = (this.route.snapshot.data.json) ? await this.feed.getDataBJson() : await this.feed.requestByUrlTrashTalk()
            }
        });

    }
    */

        async ngOnInit() {
        /*this.feeds = await this.feed.requestByUrlTrashTalk()*/
    }
/*
        randomPicture() {
        let min = Math.ceil(0);
        let max = Math.floor(this.pictures.length);
        return this.pictures[Math.floor(Math.random() * (max - min)) + min];
    }
    */

}