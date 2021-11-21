import { Component, OnInit, ViewChild } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { PropietarioResponse } from '../../interfaces/PropietarioResponse';
import { LoginService } from '../../services/login.service';
import { AlertController, IonButton, IonInput } from '@ionic/angular';

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

  titulo = null;

  @ViewChild("guardar") guardar: IonButton;
  @ViewChild("editar") editar: IonButton;
  @ViewChild("nombre") nombre: IonInput;
  @ViewChild("telefono") telefono: IonInput;

  constructor(private propietarioSvc: PropietarioService, private loginSvc: LoginService, public alertController: AlertController) { }

  ngOnInit() {
    this.getProp();
    this.titulo = 'Datos Propietario'
  }

  async getProp() {

    const rsp: PropietarioResponse = await this.propietarioSvc.getPropietario().catch(err => {
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

    const rsp: PropietarioResponse = await this.propietarioSvc.putPropietario(this.propietarioData).catch(err => {
      return null;
    });

    this.guardar.disabled = true;
    this.editar.disabled = false;
    this.nombre.readonly = true;
    this.telefono.readonly = true;
  }

  edit() {
    this.titulo = 'Editar Datos';
      this.guardar.disabled = false;
      this.editar.disabled = true;
      this.nombre.readonly = false;
      this.telefono.readonly = false;
  }

  async alertConfirm(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma',
      message: 'Desea guardar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //Cancel code...
            this.getProp();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.putProp();
          }
        }
      ]
    });

    await alert.present();
  }


}
