import { Component } from '@angular/core';
import { AppService } from './app.service';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  temp: number = 0;
  weatherDescription: string = ''
  iconWeather: string = ''
  form!: FormGroup;
  day!: Date | null
  name: string = ''


  constructor(private sv: AppService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      city: null
    })
  }

  sendWeather() {
    if (this.form.get('city')?.value) {
      this.sv.getGeoByCity(this.form.get('city')?.value).pipe(switchMap((res) => {
        return this.sv.getWeatherByCity(res[0].lat, res[0].lon)
      })).subscribe(res => {
        this.temp = res.main.temp
        this.weatherDescription = res.weather[0].description;
        this.iconWeather = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        this.day = new Date(res.dt * 1000)
        this.name = res.name
        console.log(res);
      });
    }
    else {
      this.temp = 0;
      this.weatherDescription = ''
      this.iconWeather = ''
      this.day = null
      this.name = ''
    }
  }
}
