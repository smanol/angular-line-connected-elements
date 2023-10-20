import { Injectable } from "@angular/core";
import { Point } from "../models/line.model";

@Injectable({
  providedIn: "root",
})
export class GeometryService {
  constructor() {}

  rectStart(pointA: Point, pointB: Point): Point {
    const x = pointA.x < pointB.x ? pointA.x : pointB.x;
    const y = pointA.y < pointB.y ? pointA.y : pointB.y;
    return { x, y };
  }

  rectEnd(pointA: Point, pointB: Point): Point {
    const x = pointA.x > pointB.x ? pointA.x : pointB.x;
    const y = pointA.y > pointB.y ? pointA.y : pointB.y;
    return { x, y };
  }

  rectHeight(pointA: Point, pointB: Point): number {

    const dif = Math.abs(pointB.y - pointA.y)
    return dif!=0? dif: 4;
  }
  rectWidth(pointA: Point, pointB: Point): number {
    const dif = Math.abs(pointB.x - pointA.x) ;
    return dif!=0? dif: 4;

  }

  lineStart(pointA: Point, pointB: Point): Point {
    if (pointA.x < pointB.x && pointA.y < pointB.y) return { x: 0, y: 0 };

    if (pointA.x < pointB.x && pointA.y > pointB.y) return { x: 0, y: pointA.y-pointB.y | 1};

    if (pointA.x > pointB.x && pointA.y < pointB.y) return { x: 0, y:  pointB.y-pointA.y  | 1};

    if (pointA.x > pointB.x && pointA.y > pointB.y) return { x: 0, y: 0 };

    return pointB;
  }
  lineEnd(pointA: Point, pointB: Point): Point {
    if (pointA.x < pointB.x && pointA.y < pointB.y) return { x: pointB.x-pointA.x | 1, y: pointB.y-pointA.y  | 1};

    if (pointA.x < pointB.x && pointA.y > pointB.y) return { x: pointB.x-pointA.x | 1, y: 0 };

    if (pointA.x > pointB.x && pointA.y < pointB.y) return { x: pointA.x-pointB.x | 1, y: 0 };

    if (pointA.x > pointB.x && pointA.y > pointB.y) return { x: pointA.x-pointB.x | 1, y: pointA.y-pointB.y  | 1  };

    return pointB;
  }
}
