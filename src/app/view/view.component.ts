import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnChanges {

  @Input() location: string;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){

  }




}
