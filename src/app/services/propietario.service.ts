import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PropietarioResponse } from '../interfaces/PropietarioResponse';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private loginSvc: LoginService) { }

  private propietarioResponse: PropietarioResponse={};

  public async getPropietario(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get<PropietarioResponse>('http://practicastuds.ulp.edu.ar/api/Propietarios', { headers }
    ).subscribe(res => 
      {resolve(res);
    }, err => reject(err)));
  }
}
