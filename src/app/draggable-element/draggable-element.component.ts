import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Point } from '../models/line.model';

@Component({
  selector: 'app-draggable-element',
  templateUrl: './draggable-element.component.html',
  styleUrls: ['./draggable-element.component.css']
})
export class DraggableElementComponent {
  @Input() name = ""
  @ViewChild('elementRef', { static: false }) elementRef!: ElementRef ;
  @Output() positionChangeEvent = new EventEmitter<any>();

  elementPosition: Point = { x: 0, y: 0 };
  startPosition:   Point  = { x: 0, y: 0 }

  ngAfterViewInit() {
    this.getRectPosition()


  }

  onMoving(event: any) {
    this.getRectPosition()
  }

  getRectPosition() {
    const nativeElement = this.elementRef.nativeElement;
    const rect = nativeElement.getBoundingClientRect();
    this.elementPosition = { x: Math.round(rect.left + rect.width /2 ), y: Math.round(rect.top + rect.height /2) };
    this.positionChangeEvent.emit(this.elementPosition)
  }
}
