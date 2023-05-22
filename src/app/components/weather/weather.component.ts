import { WeatherService } from './../../services/weather.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  obj: any = {};
  searchForm: FormGroup;
  result: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  search() {
    console.log("Here object", this.obj);
    this.weatherService.search(this.obj).subscribe(
      (data) => {
        console.log("Here response from API", data.weather);
        this.result = data.weather;
      }
    );
  }

}
