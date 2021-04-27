import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
    userID='';
    email='';

  constructor(        
    private auth: AuthService,
    public AfAuth:AngularFireAuth,
    private router: Router,
    private loading: LoadingController

    ) { 
      this.AfAuth.authState.subscribe(auth =>{

        if(auth){
        this.userID='Identifiant : '+auth.uid;
        this.email='Adresse e-mail : '+auth.email;
        }else{
          this.router.navigate(['/login'])
        }


    })
    }

    async ngOnInit() {
  }

  async logout(){

    const load = await this.loading.create({
      message: 'Déconnexion en cours...',
  });
    await load.present();
    this.AfAuth.signOut();
    await this.loading.dismiss();
    this.router.navigate(['/login'])

    
  }

  checkprofil(){
    //Affiche les informations du profil

  }


}
