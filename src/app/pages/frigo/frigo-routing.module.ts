import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrigoPage } from './frigo.page';

const routes: Routes = [
  {
    path: '',
    component: FrigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrigoPageRoutingModule {}
