import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(private service: WeatherService, public router: Router) {
    this.service.getDataBangalore().subscribe((data) => {
      this.data.push(data);
    });
    this.service.getDataParis().subscribe((data) => {
      this.data.push(data);
    });
    this.service.getDataBeijing().subscribe((data) => {
      this.data.push(data);
    });
    this.service.getDataLondon().subscribe((data) => {
      this.data.push(data);
    });
    this.service.getDataCalifornia().subscribe((data) => {
      this.data.push(data);
    });
  }

  ngOnInit(): void {}

  getInfo(x: any) {
    this.router.navigate(['/weather', x]);
  }
}
