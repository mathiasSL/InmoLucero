import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { InmuebleResponse } from '../interfaces/InmuebleResponse';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  baseUrl: 'http://practicastuds.ulp.edu.ar/api/';

  inmuebleResponse: any={
    id: null,
    direccion: '',
    superficie: 0,
    latitud: 0,
    longitud: 0,
    propietarioId: 5,
    grupoId: 5
  };


  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private loginSvc: LoginService, public toastController: ToastController) { }


  public async getAllInmuebles() {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise<InmuebleResponse[]>((resolve, reject) =>
      this.httpCliente.get<InmuebleResponse[]>('http://practicastuds.ulp.edu.ar/api/Inmuebles/0', { headers }
      ).subscribe(res => {
        resolve(res);
      }, err => reject(err)));
  }

  public async getInmueble(id: number) {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) =>
      this.httpCliente.get<InmuebleResponse>('http://practicastuds.ulp.edu.ar/api/Inmuebles/'+id,
      { headers }
      ).subscribe(res => {
        resolve(res);
      }, err => reject(err)));
  }


  public async postInmueble(post: InmuebleResponse) {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) =>
      this.httpCliente.post('http://practicastuds.ulp.edu.ar/api/Inmuebles',
        post, { headers, responseType: 'text' }
      ).subscribe(res => {
        resolve(res);
      }, err => reject(err)));
  }



  public async putInmueble(inmueble: InmuebleResponse) {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) =>
      this.httpCliente.put('http://practicastuds.ulp.edu.ar/api/Inmuebles/'+inmueble.id, inmueble,
      { headers, responseType: 'text' }
      ).subscribe(res => {
        resolve(res);
        this.toast("Inmueble editado correctamente.")
        this.navCtrl.navigateRoot('/menu');
      }, err => reject(err)));
  }

  public async deleteInmueble(id: number) {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) =>
      this.httpCliente.delete('http://practicastuds.ulp.edu.ar/api/Inmuebles/'+id,
      { headers, responseType: 'text' }
      ).subscribe(res => {
        resolve(res);
        this.navCtrl.navigateRoot('/menu');
      }, err => reject(err)));
  }

  async toast(mensaje: string) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000
    });
    toast.present();
  }

}
