import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginView } from '../interfaces/LoginView';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _almacenar: Storage | null = null;

  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private almacenar: Storage) {
    this.init();
   }

   async init() {
    const almacenar = await this.almacenar.create();
    this._almacenar = almacenar;
  }

  public set(key: string, value: any) {
    this._almacenar?.set(key, value);
  }

  public login(credenciales: LoginView)
  {
    const headers = {
      contentType: 'application/json'
    };

    return new Promise<string>((resolve, reject) => 
    this.httpCliente.post('http://practicastuds.ulp.edu.ar/api/propietarios/login',
    credenciales, {headers, responseType: 'text' }
    ).subscribe(res => {
        resolve(res);
        this.navCtrl.navigateRoot('/menu');
        this.almacenar.set("Token", res);
     
    }, err => {
      reject(err);
      this.navCtrl.navigateRoot('/login');
    })
    
  );
  }

  public getPerfil(token: string)
  {
    const headers = {
      contentType: 'application/json',
      authorization: 'Bearer '+token
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get('http://practicastuds.ulp.edu.ar/api/propietarios', { headers }
    ).subscribe(res => resolve(res), err => reject(err)));
  }

}
