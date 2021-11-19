import { Component, OnInit, ViewChild } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { PropietarioResponse } from '../../interfaces/PropietarioResponse';
import { LoginService } from '../../services/login.service';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { IonButton, IonInput } from '@ionic/angular';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  propietarioData: PropietarioResponse = {
    nombre: '',
    email: '',
    clave: '',
    telefono: '',
    id: 0,
    grupoId: 0
  };

  @ViewChild("guardar") guardar: IonButton;
  @ViewChild("editar") editar: IonButton;
  @ViewChild("nombre") nombre: IonInput;
  @ViewChild("telefono") telefono: IonInput;

  constructor(private propietarioSvc: PropietarioService, private loginSvc: LoginService) { }

  ngOnInit() {
    this.getProp();
  }

  async getProp() {

    const rsp: PropietarioResponse = await this.propietarioSvc.getPropietario(await this.loginSvc.getToken()).catch(err => {
      return null;
    });

    this.propietarioData.nombre = rsp.nombre;
    this.propietarioData.email = rsp.email;
    this.propietarioData.telefono = rsp.telefono;
    this.propietarioData.id = rsp.id;
    this.propietarioData.grupoId = rsp.grupoId;
    this.propietarioData.clave = "";
  }

  async putProp() {

    const rsp: PropietarioResponse = await this.propietarioSvc.putPropietario(await this.loginSvc.getToken(), this.propietarioData).catch(err => {
      return null;
    });

    this.guardar.disabled = true;
    this.editar.disabled = false;
    this.nombre.readonly = true;
    this.telefono.readonly = true;
  }

  edit() {
      this.guardar.disabled = false;
      this.editar.disabled = true;
      this.nombre.readonly = false;
      this.telefono.readonly = false;
  }


}
