import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap, catchError } from "rxjs/operators/"
import { throwError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  
  readonly weather_api : string = "https://api.darksky.net/forecast/230c0fbde4008da55417b9b35e4da7f5/*,#";

  localData = "http://127.0.0.1:5500/weather.json"

  constructor(public http : HttpClient) { 
  	console.log("weather service init.");
  }

  getWeatherInfo(coordinates : any, type="daily") {
    // this._stringQuery(coordinates);

    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    })

    // this.http.get(this._coordinateQuery, {
    //   headers : headers
    // }).subscribe((response) => console.log(response));
//this.weather_api.replace("*", coordinates[0]).replace("#",coordinates[1]
    return this.http.get(this.localData).pipe(
      tap(_ => console.log('got data')),
      catchError(err => throwError('Error : ' +  err))
    );
  }
}