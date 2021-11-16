import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InmuebleResponse } from '../interfaces/InmuebleResponse';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private loginSvc: LoginService) { }

  private inmuebleResponse: InmuebleResponse={};

  public async getInmuebles(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get<InmuebleResponse>('http://practicastuds.ulp.edu.ar/api/Inmuebles/0', { headers }
    ).subscribe(res => 
      {resolve(res);
    }, err => reject(err)));
  }
}
