import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(        
    private auth: AuthService,
    ) { }

  ngOnInit() {
  }

  logout(){

    //Retourne la fonction logout
    return this.auth.logout();
    
  }

  checkprofil(){
    //Affiche les informations du profil

  }


}
