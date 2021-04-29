import { AbstractType, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FavorisRecette } from '../../interfaces/favoris-recette';
import { element } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
    public AfAuth:AngularFireAuth,
    private router : Router,
    public firestore:AngularFirestore
    ){
      this.AfAuth.authState.subscribe(auth =>{

        if(!auth){
          this.router.navigate(['/login'])
        }else{
          this.userId=auth.uid;
        }
      })
      
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.details = data;
    })
    
  }


   


  ngOnInit() {
  
  }

}
