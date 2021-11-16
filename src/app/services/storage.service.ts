import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this.storage = storage;
  }

  public set(key: string, value: any){
    this.storage?.set(key, value);
  }

  public get(key: string){
    return this.storage?.get(key);
  }

  public clear(){
    return this.storage?.clear();
  }

  public keys(){
    return this.storage?.keys();
  }

  public length(){
    return this.storage?.length;
  }

  public async logValues(){
    const keys = await this.storage?.keys();
    for(const key of keys){
      console.log(key, await this.storage?.get(key));
    }
  }


}
