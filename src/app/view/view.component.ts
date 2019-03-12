import { Component, OnInit, Input } from '@angular/core';
import { PlaceService } from '../place.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  location : string;
  
  constructor(private data : PlaceService) { }

  ngOnInit() {
    this.data.currentLocation.subscribe(location => this.location = location);
    console.log(`from view : ${this.location}`);
  }



}
