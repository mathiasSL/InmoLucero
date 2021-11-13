import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InmuebleResponse } from '../interfaces/InmuebleResponse';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private httpCliente: HttpClient, private navCtrl: NavController) { }

  private inmuebleResponse: InmuebleResponse={};

  public getInmuebles(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: 'Bearer '+token
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get<InmuebleResponse>('http://practicastuds.ulp.edu.ar/api/Inmuebles/0', { headers }
    ).subscribe(res => 
      {resolve(res);
    }, err => reject(err)));
  }
}
