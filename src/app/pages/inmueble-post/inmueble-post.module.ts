import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmueblePostPageRoutingModule } from './inmueble-post-routing.module';

import { InmueblePostPage } from './inmueble-post.page';
import { ComponentsModule } from '../../components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmueblePostPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InmueblePostPage]
})
export class InmueblePostPageModule {}
