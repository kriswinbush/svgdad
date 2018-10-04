import { Component, OnInit, Input } from '@angular/core';
export enum Direction {UNKNOWN, NEXT, PREV}

@Component({
  selector: 'svgdad-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  
}
