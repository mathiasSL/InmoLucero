import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private httpCliente: HttpClient, private navCtrl: NavController) { }


  public getInmuebles(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: 'Bearer '+token
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get('http://practicastuds.ulp.edu.ar/api/Inmuebles/0', { headers }
    ).subscribe(res => resolve(res), err => reject(err)));
  }
}
