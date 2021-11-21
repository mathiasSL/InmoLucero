import { Component, OnInit, ViewChild } from '@angular/core';
import { InmueblesService } from '../../services/inmuebles.service';
import { InmuebleResponse } from '../../interfaces/InmuebleResponse';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage implements OnInit {

  public inmuebleData = {
    id: null,
    direccion: '',
    superficie: 0,
    latitud: 0,
    longitud: 0,
    propietarioId: 5,
    grupoId: 5
  }

  inmueble: Array<InmuebleResponse>;

  constructor(private inmuebleSvc: InmueblesService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.getInmueblesAll();
  }

  async getInmueblesAll() {

    const list: InmuebleResponse[] = await this.inmuebleSvc.getAllInmuebles().catch(err => {
      return null;
    });

    this.inmueble = [];
    list.forEach((x) => {
      this.inmueble.push(x);
    });
  }

  async deleteInm(id: number) {
    await this.inmuebleSvc.deleteInmueble(id).catch(err => {
      return null;
    });
  }


  editarInmueble(dato: number){

    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: dato
      }
    }
    this.router.navigate(['inmueble-get'], navigationExtras);
  }

  async alertConfirm(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma',
      message: 'Seguro que desea eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //Cancel code...
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteInm(id);
          }
        }
      ]
    });

    await alert.present();
  }
}
