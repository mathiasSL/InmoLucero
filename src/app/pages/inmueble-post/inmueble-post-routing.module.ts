import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmueblePostPage } from './inmueble-post.page';

const routes: Routes = [
  {
    path: '',
    component: InmueblePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmueblePostPageRoutingModule {}
