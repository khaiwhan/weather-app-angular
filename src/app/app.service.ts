import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiGeoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'd2986016ba002dce8aca54e4be3c7573';

  constructor(private http : HttpClient) { }

  getGeoByCity(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'metric',
      lang: 'th'       
    };

    return this.http.get(this.apiGeoUrl, { params });
  }
  getWeatherByCity(lat:number , lon:number): Observable<any> {
    console.log('lat lon' , lat , lon)
    const params = {
      lat: lat,
      lon: lon,
      appid: this.apiKey,
      units: 'metric',
      lang: 'th' 
    };

    return this.http.get(this.apiWeatherUrl, { params });
  }

}
