import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locations: { latitud: number; longitud: number; date: Date}[]=[];

  constructor() {}
 
   async getLocation() {
    try{
      const position = await Geolocation.getCurrentPosition();
      const location = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
        date: new Date()
      };
      this.locations.push(location)
      console.log(this.locations)
    }catch(e){
      console.log('Error getting the location',e);
    }
  }
}
