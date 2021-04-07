import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrigoPageRoutingModule } from './frigo-routing.module';

import { FrigoPage } from './frigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrigoPageRoutingModule
  ],
  declarations: [FrigoPage]
})
export class FrigoPageModule {}
