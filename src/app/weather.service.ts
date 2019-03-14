import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap, catchError } from "rxjs/operators/"
import { throwError, of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  readonly weather_api : string = "https://api.darksky.net/forecast/230c0fbde4008da55417b9b35e4da7f5/*,#";

  private _coordinateQuery :string;

  localData = "http://127.0.0.1:5500/weather.json"

  content : any;
  alerts : any;


  constructor(public http : HttpClient) { 
  	console.log("weather service init.");
  }

  private _stringQuery(coordinates : Array<number>) : void {
  	  	this._coordinateQuery = this.weather_api.replace("*", String(coordinates[0])).replace("#", String(coordinates[1]));
  }

  getWeatherInfo(coordinates : any, type="daily") {
    // this._stringQuery(coordinates);

    // let headers = new HttpHeaders({
    //   'Content-Type' :'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // })

    // this.http.get(this._coordinateQuery, {
    //   headers : headers
    // }).subscribe((response) => console.log(response));

    console.log(coordinates);
    return this.http.get(this.localData).pipe(
      tap(_ => console.log('got data')),
      catchError(err => throwError('Error : ' +  err))
    );
  }


  value(a : any){
    return of(a);
  }

}