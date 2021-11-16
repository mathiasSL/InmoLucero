import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginSvc: LoginService) { }

   ngOnInit() {
    this.loginData.usuario = "mathiaslucero19@gmail.com";
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
    //const perfil = await this.loginSvc.getPerfil(token).catch(err => {
     // console.log('Error: ', err);
    //});
    //console.log('Perfil: ', perfil);
  }

}
