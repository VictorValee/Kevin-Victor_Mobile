import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import ('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () =>
            import ('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () =>
            import ('./pages/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'profil',
        loadChildren: () =>
            import ('./pages/profil/profil.module').then(m => m.ProfilPageModule)
    },
    {
        path: 'search',
        loadChildren: () =>
            import ('./pages/search/search.module').then(m => m.SearchPageModule)
    },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./pages/favoris/favoris.module').then( m => m.FavorisPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'frigo',
    loadChildren: () => import('./pages/frigo/frigo.module').then( m => m.FrigoPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}