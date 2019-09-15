import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng5SliderModule} from 'ng5-slider';

import { VisualizerRoutingModule } from './visualizer-routing.module';
import { MainComponent } from './components/main/main.component';
import { ChartComponent } from './components/chart/chart.component';
import { GraphComponent } from './components/graph/graph.component';
import {SharedModule} from './../shared/shared.module';
import { NodeDetailsComponent } from './components/node-details/node-details.component';

@NgModule({
  declarations: [MainComponent, ChartComponent, GraphComponent, NodeDetailsComponent],
  imports: [
    CommonModule,
    Ng5SliderModule,
    SharedModule,
    VisualizerRoutingModule
  ]
})
export class VisualizerModule { }
