import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locations: { latitud: number; longitud: number; date: string }[] = [];

  constructor() {}

  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const now = new Date();
      const location = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
        date: `${String(now.getDate()).padStart(2, '0')}/${String(
          now.getMonth() + 1
        ).padStart(2, '0')}/${now.getFullYear()}`,
      };
      this.locations.push(location);
      console.log(this.locations);
    } catch (e) {
      console.log('Error getting the location', e);
    }
  }

  resetLocations() {
    this.locations = [];
  }
}

