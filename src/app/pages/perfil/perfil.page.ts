import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { PropietarioResponse } from '../../interfaces/PropietarioResponse';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  propietario: any;

  constructor(private propietarioSvc: PropietarioService, private almacenar: Storage) { }

  async ngOnInit() {
    await this.almacenar.create();
    this.getProp();
  }

  async getProp() {

    const token = await this.almacenar.get('Token');

    const rsp: any = await this.propietarioSvc.getPropietario(token).catch(err => {
      return null;
    });

    this.propietario = [];
    this.propietario.push(rsp);
 
  }


}
