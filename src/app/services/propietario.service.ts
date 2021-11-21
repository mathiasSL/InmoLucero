import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { PropietarioResponse } from '../interfaces/PropietarioResponse';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private httpCliente: HttpClient, private navCtrl: NavController, private loginSvc: LoginService, public toastController: ToastController) { }

  propietarioResponse: any={
    nombre: '',
    email: '',
    clave: '',
    telefono: '',
    id: 5,
    grupoId: 5
  };

  public async getPropietario()
  {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) => 
    this.httpCliente.get<PropietarioResponse>('http://practicastuds.ulp.edu.ar/api/Propietarios', { headers }
    ).subscribe(res => 
      {resolve(res);   
        //console.log(this.prop = res.id)
    }, err => reject(err)));
  } 



  public async putPropietario(prop: PropietarioResponse) {
    const headers = {
      contentType: 'application/json',
      authorization: `Bearer ${await this.loginSvc.getToken()}`
    };

    return new Promise((resolve, reject) =>
      this.httpCliente.put('http://practicastuds.ulp.edu.ar/api/Propietarios/'+this.propietarioResponse.id, prop,
      { headers, responseType: 'text' }
      ).subscribe(res => {
        resolve(res);
        this.toast("Perfil editado correctamente.")
      }, err => reject(err)));
  }

  async toast(mensaje: string) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000
    });
    toast.present();
  }


 /*  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}; */
//verificar si el usuario esta logueado
		//si no esta logueado redireccionar al login
	/* 	const token = await this.storage.getToken();
		if (token != null) {
			return true;
		}
		else {
			this.router.navigate(['/input']);
			return false;
		} */

}
