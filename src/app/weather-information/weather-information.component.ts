import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss'],
})
export class WeatherInformationComponent implements OnInit {
  constructor(public router: ActivatedRoute, private service: WeatherService) {}
  id: any;
  weather: any = [];

  ngOnInit(): void {
    this.id = this.router.snapshot.params.x;
    this.fetchWeather();
  }

  fetchWeather() {
    this.service.getWeatherInfo(this.id).subscribe((data) => {
      this.weather.push(data);
      console.log(this.weather);
      
    });
  }
  getSunrise(rise:number) {
    return new Date(rise*1000)
  }

}
