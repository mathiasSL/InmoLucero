import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmuebleGetPageRoutingModule } from './inmueble-get-routing.module';

import { InmuebleGetPage } from './inmueble-get.page';
import { ComponentsModule } from '../../components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmuebleGetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InmuebleGetPage]
})
export class InmuebleGetPageModule {}
