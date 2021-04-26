import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(        
    private auth: AuthService,
    public AfAuth:AngularFireAuth,
    private router: Router

    ) { }

  ngOnInit() {
  }

  logout(){

    //Retourne la fonction logout
    this.AfAuth.signOut();
    this.router.navigate(['/login'])

    
  }

  checkprofil(){
    //Affiche les informations du profil

  }


}
