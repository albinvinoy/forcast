import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators'
import { Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  readonly coord_API = "https://api.opencagedata.com/geocode/v1/json?q=*&key=dcd02e4f235d46eb947f821717bc8f5f"

  constructor(private http: HttpClient) { }

  public getCoordinates(location: string) {
    return this.http.get(this.coord_API.replace("*", location)).pipe(
      tap(_ => console.log("recieved geoData")),
      catchError(err => { throw "GEO ERROR: " + err })
    )
  }
}
