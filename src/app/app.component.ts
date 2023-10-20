import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Point } from './models/line.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  positionA: Point = {x:0, y:0, }
  positionB: Point = {x:0, y:0,}

  title = 'angular-line-connected-elements';


  positionChangedA(position:Point){
    this.positionA = position
  }
  positionChangedB(position:Point){
  this.positionB = position
  }


  pointA = {x: 100, y: 100}
  pointB = {x: 0, y: 0}
  constructor() {
}
}
