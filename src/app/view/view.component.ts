import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service'
import { map, switchMap } from 'rxjs/operators';
import { CoordinateService } from '../coordinate.service';
import { Observable, of, pipe } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnChanges {
  alerts: any;
  currData: any = {};

  @Input() location: string;

  coordinate = [];

  constructor(public weatherService: WeatherService, public coordService: CoordinateService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.weatherData();
    console.log(this.currData);
  }

  weatherData() {
    this.coordService.getCoordinates(this.location).pipe(
      switchMap(coordata => {
        let coord = null;
        if (coordata['status']['code'] == 200 && coordata['results'].length != 0) {
          let lat = coordata['results'][0]['geometry']['lat'];
          let lng = coordata['results'][0]['geometry']['lng'];
          coord = [lat, lng];
        }
        else{
          coord = [];
        }
        return this.weatherService.getWeatherInfo(coord)
      })
    ).subscribe(data => {
      console.log(data);
      this.currData["time"] = this.convertEpochToHumantime(data['currently']['time']);
      this.currData['summary'] = data['currently']['summary'];
      this.currData['location'] = data['timezone'].replace("/", "-")
      let x = [];
      data['daily']['data'].forEach(el => {
        x.push({ 
          date: this.convertEpochToHumantime(el['time']), 
          summary: el['summary'],
          icon : el['icon'],
          low : el['temperatureLow'],
          high : el['temperatureHigh'],
          sunrise : this.convertEpochToHumantime(el['sunriseTime']),
          sunset : this.convertEpochToHumantime(el['sunsetTime'])
        });
      });
      this.currData['view'] = x;
    });
  }

  convertEpochToHumantime(epoch: any): Date {
    return new Date(epoch * 1000);
  }
}
