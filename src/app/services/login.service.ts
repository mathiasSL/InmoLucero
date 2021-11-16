import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginView } from '../interfaces/LoginView';
import { NavController } from '@ionic/angular';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private almacenar: StorageService) {

  }

  public login(credenciales: LoginView) {
    const headers = {
      contentType: 'application/json'
    };

    return new Promise<string>((resolve, reject) =>
      this.httpCliente.post('http://practicastuds.ulp.edu.ar/api/propietarios/login',
        credenciales, { headers, responseType: 'text' }
      ).subscribe(res => {
        this.almacenar.set("Token", res);
        resolve(res);
        this.navCtrl.navigateRoot('/menu');
      }, err => {
        reject(err);
        this.navCtrl.navigateRoot('/login');
      })
    );
  }

  public async getToken(): Promise<string>{
      return await this.almacenar.get("Token");
  }

  /* public getPerfil(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: 'Bearer '+token
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get('http://practicastuds.ulp.edu.ar/api/propietarios', { headers }
    ).subscribe(res => resolve(res), err => reject(err)));
  } */

}
