import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inmuebles',
    loadChildren: () => import('./pages/inmuebles/inmuebles.module').then( m => m.InmueblesPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'inmueble-post',
    loadChildren: () => import('./pages/inmueble-post/inmueble-post.module').then( m => m.InmueblePostPageModule)
  },
  {
    path: 'inmueble-get',
    loadChildren: () => import('./pages/inmueble-get/inmueble-get.module').then( m => m.InmuebleGetPageModule)
  },
  {
    path: 'inmueble-get/:id',
    loadChildren: () => import('./pages/inmueble-get/inmueble-get.module').then( m => m.InmuebleGetPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
