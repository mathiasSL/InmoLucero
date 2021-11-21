import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmuebleGetPage } from './inmueble-get.page';

const routes: Routes = [
  {
    path: '',
    component: InmuebleGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmuebleGetPageRoutingModule {}
