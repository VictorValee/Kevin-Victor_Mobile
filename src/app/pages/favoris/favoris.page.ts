import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  constructor(public AfAuth:AngularFireAuth,
    private router :Router) {
    this.AfAuth.authState.subscribe(auth =>{

      if(!auth){
        this.router.navigate(['/login'])
      }
    })

   }

  ngOnInit() {
  }

}
