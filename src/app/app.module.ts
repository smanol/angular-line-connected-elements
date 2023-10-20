import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DraggableElementComponent } from './draggable-element/draggable-element.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { ConnectingLineComponent } from './connecting-line/connecting-line.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableElementComponent,
    ConnectingLineComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
