import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    VisualizerRoutingModule
  ]
})
export class VisualizerModule { }
