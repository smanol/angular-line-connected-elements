import { Point } from '../models/line.model';
import { Component, Input } from '@angular/core';
import { GeometryService } from '../services/geometry.service';

@Component({
  selector: 'app-connecting-line',
  templateUrl: './connecting-line.component.html',
  styleUrls: ['./connecting-line.component.css']
})
export class ConnectingLineComponent {

  constructor(private geometryService: GeometryService) {}

  @Input() pointA!: Point
  @Input() pointB!: Point


  get rectStart(): Point {
    return this.geometryService.rectStart(this.pointA, this.pointB)
  }

  get rectEnd(): Point {
    return this.geometryService.rectEnd(this.pointA, this.pointB)
  }


  get rectHeight(): number {
    return this.geometryService.rectHeight(this.pointA, this.pointB)
  }
  get rectWidth(): number {
    return this.geometryService.rectWidth(this.pointA, this.pointB)
  }

  get lineStart(): Point {
    return this.geometryService.lineStart(this.pointA, this.pointB)
  }
  get lineEnd(): Point {
    return this.geometryService.lineEnd(this.pointA, this.pointB)
  }





}
