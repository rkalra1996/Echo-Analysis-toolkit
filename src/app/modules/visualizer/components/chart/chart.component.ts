import { Component, OnInit } from '@angular/core';
import { D3ChartService } from 'src/app/modules/d3-core/services/d3-chart-service/d3-chart.service';

@Component({
  selector: 'visualizer-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private D3ChartSrvc: D3ChartService) { }

  ngOnInit() {
  }

}
