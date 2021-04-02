import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [{
    path: '',
    component: TabsPage,
    children: [{
            path: 'home',
            children: [{
                path: '',
                data: { json: false },
                loadChildren: '../home/home.module#HomePageModule'
            }],
            data: { json: false },
        },
        {
            path: 'profil',
            children: [{
                path: '',
            loadChildren: () => import ('../profil/profil.module').then(m => m.ProfilPageModule)
            }],
        }, 
        {
            path: 'favoris',
            children: [{
                path: '',
            loadChildren: () => import ('../favoris/favoris.module').then(m => m.FavorisPageModule)
            }],
        }, 
        {
            path: 'frigo',
            children: [{
                path: '',
            loadChildren: () => import ('../frigo/frigo.module').then(m => m.FrigoPageModule)
            }],
        }, 
        {
            path: 'panier',
            children: [{
                path: '',
            loadChildren: () => import ('../panier/panier.module').then(m => m. PanierPageModule)
            }],
        },
        {
            path: 'homeJson',
            children: [{
                path: '',
                data: { json: true },
                loadChildren: '../home/home.module#HomePageModule'
            }],
            data: { json: true },
        },
        {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
        },
        {
            path: '',
            redirectTo: '/tabs/profil',
            pathMatch: 'full'
        },

        {
            path: '',
            redirectTo: '/tabs/panier',
            pathMatch: 'full'
        },

        {
            path: '',
            redirectTo: '/tabs/favoris',
            pathMatch: 'full'
        },
        {
            path: '',
            redirectTo: '/tabs/frigo',
            pathMatch: 'full'
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}