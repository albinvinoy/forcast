import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private destination = new BehaviorSubject<string>(null);
  currentLocation = this.destination.asObservable();

  constructor() { }

  passLocation(loc : string){
    this.destination.next(loc);
  }

}
