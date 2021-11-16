import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { PropietarioResponse } from '../../interfaces/PropietarioResponse';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  propietario: any;

  constructor(private propietarioSvc: PropietarioService, private loginSvc: LoginService) { }

  ngOnInit() {
    this.getProp();
  }

  async getProp() {

    const rsp: any = await this.propietarioSvc.getPropietario(await this.loginSvc.getToken()).catch(err => {
      return null;
    });

    this.propietario = [];
    this.propietario.push(rsp);
 
  }


}
