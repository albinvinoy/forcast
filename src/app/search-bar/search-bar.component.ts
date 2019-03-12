import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {
  private _locationSearch: string;
  location : string;

  onEnter(value: string) {
    this._locationSearch = value;
    this.data.passLocation(this._locationSearch);
  }
  
  constructor(private data : PlaceService) { }
  ngOnInit() { 
    //this.data.currentLocation.subscribe(location => this.location = location);
  }
}
