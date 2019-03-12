import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {
  private locationSearch: string;

  onEnter(value: string) {
    this.locationSearch = value;
    console.log(this.locationSearch);
  }
  
  constructor() { }
  ngOnInit() { }
}
