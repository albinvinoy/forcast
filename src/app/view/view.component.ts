import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnChanges {
  alerts: any;
  currData:any = {};


  @Input() location: string;



  coordinate = [37.8267, -122.4233];

  constructor(public weatherService: WeatherService) { }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);
    this.printData(this.coordinate);
    console.log(this.currData);
  }

  printData(coord: Array<number>) {
    this.weatherService.getWeatherInfo(coord).subscribe((data) => {
      this.currData["time"] = this.convertEpochToHumantime(data['currently']['time']);
      this.currData['summary'] = data['currently']['summary'];
      let x = [];
      data['daily']['data'].forEach(el => {
        x.push({ time: this.convertEpochToHumantime(el['time']), summary: el['summary'] });
      });
      this.currData['view'] = x
      console.log(this.currData);
    });

  }

  convertEpochToHumantime(epoch: any): Date {
    return new Date(epoch *1000);
  }
}
