import { AbstractType, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],

})
export class DetailsPage implements OnInit {

details:any=[];

  constructor(public route:ActivatedRoute) {
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.details = data;

    })
   }

   


  ngOnInit() {
  
  }

}
