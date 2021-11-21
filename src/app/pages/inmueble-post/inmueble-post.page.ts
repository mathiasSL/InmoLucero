import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { InmueblesService } from '../../services/inmuebles.service';

@Component({
  selector: 'app-inmueble-post',
  templateUrl: './inmueble-post.page.html',
  styleUrls: ['./inmueble-post.page.scss'],
})
export class InmueblePostPage implements OnInit {
  
  public inmuebleData = {
    direccion: '',
    superficie: null,
    latitud: null,
    longitud: null,
    propietarioId: 5,
    grupoId: 5
  }

  constructor(private loginSvc: LoginService, private inmuebleSvc: InmueblesService) { }

  ngOnInit() {
  }

  async saveInmueble() {

    const token = await this.inmuebleSvc.postInmueble(this.inmuebleData).catch(err => {
      console.log('Error: ', err);
      return null;
    });
  }


}
