import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../services/inmuebles.service';
import { InmuebleResponse } from '../../interfaces/InmuebleResponse';
import { StorageService } from '../../services/storage.service';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private inmuebleSvc: InmueblesService, private loginSvc: LoginService) { }

  ngOnInit() {
    this.getInmuebless();
  }

  async getInmuebless() {
    
    const listaInmuebles: any = await this.inmuebleSvc.getInmuebles(await this.loginSvc.getToken()).catch(err => {
      return null;
    });

            this.inmueble = [];

            listaInmuebles.forEach( ( x ) => {

                this.inmueble.push( x );
            } );
  }

  



}
