import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../services/inmuebles.service';
import { Storage } from '@ionic/storage-angular';
import { InmuebleResponse } from '../../interfaces/InmuebleResponse';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage implements OnInit {

  public inmuebleData = {
    direccion: '',
    superficie: '',
    latitud: '',
    longitud: '',
    propietarioId: '',
    grupoId: ''
}

inmueble: Array<InmuebleResponse>;

  constructor(private inmuebleSvc: InmueblesService, private almacenar: Storage) { }

  async ngOnInit() {
    await this.almacenar.create();
    this.getInmuebless();
  }

  async getInmuebless() {

    const token = await this.almacenar.get('Token');
    
    const listaInmuebles: any = await this.inmuebleSvc.getInmuebles(token).catch(err => {
      return null;
    });

            this.inmueble = [];

            listaInmuebles.forEach( ( x ) => {

                this.inmueble.push( x );
            } );
  }

  



}
