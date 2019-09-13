import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {VisualizerModule} from './modules/visualizer/visualizer.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VisualizerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
