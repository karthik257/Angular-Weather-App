import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getWeatherInfo(cityname: string) {    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=49445513b5b126176377a60222da24b1&units=metric`
    return this.http.get(url)
  }
  getDataBangalore() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=49445513b5b126176377a60222da24b1&units=metric"
    return this.http.get(url)
  }
  getDataParis() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=49445513b5b126176377a60222da24b1&units=metric"
    return this.http.get(url)
  }
  getDataBeijing() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=49445513b5b126176377a60222da24b1&units=metric"
    return this.http.get(url)
  }
  getDataLondon() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=49445513b5b126176377a60222da24b1&units=metric"
    return this.http.get(url)
  }
  getDataCalifornia() {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=california&appid=49445513b5b126176377a60222da24b1&units=metric"
    return this.http.get(url)
  }

}

/*
https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=49445513b5b126176377a60222da24b1&units=metric
https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=49445513b5b126176377a60222da24b1&units=metric
https://api.openweathermap.org/data/2.5/weather?q=london&appid=49445513b5b126176377a60222da24b1&units=metric
https://api.openweathermap.org/data/2.5/weather?q=california&appid=49445513b5b126176377a60222da24b1&units=metric
https://api.openweathermap.org/data/2.5/weather?q=paris&appid=49445513b5b126176377a60222da24b1&units=metric
 */