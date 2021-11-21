import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmuebleResponse } from 'src/app/interfaces/InmuebleResponse';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmueble-get',
  templateUrl: './inmueble-get.page.html',
  styleUrls: ['./inmueble-get.page.scss'],
})
export class InmuebleGetPage implements OnInit {

  public inmuebleData = {
    id: 0,
    direccion: '',
    superficie: 0,
    latitud: 0,
    longitud: 0,
    propietarioId: 5,
    grupoId: 5
  }

  constructor(private inmuebleSvc: InmueblesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params.id){
        this.getInm(params.id);
      }
    });

  }

  async getInm(id: number){
    const list: InmuebleResponse = await this.inmuebleSvc.getInmueble(id).catch(err => {
      return null;
    });
    this.inmuebleData.id = list.id;
    this.inmuebleData.direccion = list.direccion;
    this.inmuebleData.superficie = list.superficie;
    this.inmuebleData.latitud = list.latitud;
    this.inmuebleData.longitud = list.longitud;
    this.inmuebleData.grupoId = list.grupoId;
    this.inmuebleData.propietarioId = list.propietarioId
  }

  async putInm() {

    const rsp: InmuebleResponse = await this.inmuebleSvc.putInmueble(this.inmuebleData).catch(err => {
      return null;
    });
  }



}
