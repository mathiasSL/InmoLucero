import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginData = {
      usuario: '',
      clave: ''
  }

  constructor(private loginSvc: LoginService, private almacenar: Storage) { }

  async ngOnInit() {
    await this.almacenar.create();
  }

  async entrar(){
    console.log('Acceso: ', this.loginData);
    const token = await this.loginSvc.login(this.loginData).catch(err => {
      console.log('Error: ', err);
      return null;
    });
    if(!token){
      return;
    }

    console.log('Token: ', token);
    const perfil = await this.loginSvc.getPerfil(token).catch(err => {
      console.log('Error: ', err);
    });
    console.log('Perfil: ', perfil);
  }

}
