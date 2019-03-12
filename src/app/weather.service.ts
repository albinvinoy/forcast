import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  readonly weather_api : string = "https://api.darksky.net/forecast/230c0fbde4008da55417b9b35e4da7f5/37.8267,-122.4233";


  

  // private destination = new BehaviorSubject<string>(null);
  // currentLocation = this.destination.asObservable();

  // constructor() { }

  // passLocation(loc : string){
  //   this.destination.next(loc);
  // }

  constructor() { }

  

}
