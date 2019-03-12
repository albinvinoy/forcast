import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {
  private _locationSearch: string;

  onEnter(value: string) {
    this._locationSearch = value;
    console.log(this._locationSearch);
  }
  
  constructor() { }
  ngOnInit() { }
}
