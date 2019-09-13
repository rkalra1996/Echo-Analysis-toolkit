import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { MainComponent } from './components/main/main.component';
import { ChartComponent } from './components/chart/chart.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [MainComponent, ChartComponent, GraphComponent],
  imports: [
    CommonModule,
    VisualizerRoutingModule
  ]
})
export class VisualizerModule { }
