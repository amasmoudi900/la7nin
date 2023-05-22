import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURl: string = "http://localhost:3000/weather";
  constructor(private httpClient: HttpClient) { }

  search(obj) {
    return this.httpClient.post<{ weather: any }>(this.weatherURl, obj);
  }
}
