import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../services/inmuebles.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage implements OnInit {

  public inmuebleData = {
    direccion: '',
    superficie: '',
    latitud: '',
    longitud: '',
    propietarioId: '',
    grupoId: ''
}


  constructor(private inmuebleSvc: InmueblesService, private almacenar: Storage) { }

  async ngOnInit() {
    await this.almacenar.create();
  }

  async getAllInmuebles(){

    const token = await this.almacenar.get('Token');

    console.log('Token almacenado: ', token);
    
    const getInmueblesAll = await this.inmuebleSvc.getInmuebles(token).catch(err => {
     
      return null;
    });  
    
    console.log('Inmuebles: ', getInmueblesAll);

  }
}
