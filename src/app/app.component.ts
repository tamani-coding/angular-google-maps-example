import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: '--APIKEY--'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 51.233334, lng: 	6.783333 }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6,
        styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
