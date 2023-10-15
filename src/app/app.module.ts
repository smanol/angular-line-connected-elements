import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DraggableElementComponent } from './draggable-element/draggable-element.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
