import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  locations: { latitud: number; longitud: number; date: Date}[]=[];

  constructor() {}

   async geolocation() {
    try{
      const position = await Geolocation.getCurrentPosition();
      console.log(position);
    }catch(e){
      console.log(e);
    }
  }
}
