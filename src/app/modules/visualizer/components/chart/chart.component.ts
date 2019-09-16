import { Component, OnInit } from '@angular/core';
import { D3ChartService } from 'src/app/modules/d3-core/services/d3-chart-service/d3-chart.service';
import * as d3 from 'd3';
import { GraphDetailsService } from '../../services/graph-details-shared-service/graph-details.service';

import {Options} from 'ng5-slider';

declare var $: any;

@Component({
  selector: 'visualizer-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public width = 500;
  public height = 500;
  public node;
  public svg;
  public links;
  public nodes;
  public simulation;
  public link;
  public nIterator = 0;
  public data;
  public tooltip;
  public edgePaths;
  public blinkingQueue = [];
  public blinkingIterator = 0;
  public value = 0;
  public options: Options = {
    floor: 0,
    step: 5,
    ceil: 50,
    readOnly: true,
    showTicks: true
  };

  constructor(private D3ChartSrvc: D3ChartService, private sharedSrvc: GraphDetailsService) { }

  ngOnInit() {
    this.data = this.sharedSrvc.graphData;
    // set the ceil
    this.options.ceil = this.data.links.length * 5;
    this.svg = d3.select('#canvas').append('svg')
    .attr('width', "100%").attr('height', "55vh")   
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-200 0 1000 400");
    this.tooltip = d3.select("#canvas").append("div").attr("class", "tooltip");

    this.links = this.data.links.map(d => Object.create(d));
    this.nodes = this.data.nodes.map(d => Object.create(d));


    this.d3SimpleGraph(this.svg);

    document.getElementsByClassName("start")[0].addEventListener("click", (e) => {
      this.blink();
    });
  }

 private d3SimpleGraph(svg) : void{

 this.simulation = d3.forceSimulation(this.nodes)
     .force("link", d3.forceLink(this.links).id(d => d['id']).distance(170))
     .force("charge", d3.forceManyBody().strength(-240))
     .force("collide", d3.forceCollide().radius(function(d) { return d.r + 10; }).iterations(1))
     .force("center", d3.forceCenter(400, 200));

     this.edgePaths = svg.selectAll(".edgepath")
      .data(this.links)
      .enter()
      .append('path')
      .attr('class', 'edgepath')
      .attr('fill-opacity', 0)
      .attr('stroke-opacity', 0)
      .attr('id', function (d, i) { return 'edgepath' + i })
      .style("pointer-events", "none");


 this.link = svg.append("g")
     .attr("stroke", "#000")
     .attr("stroke-opacity", 0.6)
     .selectAll("line")
     .data(this.links)
     .join("line")
     .attr('marker-end','url(#arrowhead)')
     .attr("stroke-width", d => Math.sqrt(d.value));

 this.node = svg.append("g")
     .attr("stroke", "#fff")
     .attr("stroke-width", 1.5)
     .selectAll("circle")
     .data(this.nodes)
     .join("circle")
     .attr("r", 25)
     .attr("fill", this.color())
     .call(this.drag(this.simulation))

 this.node.append("title")
     .text(d => d.id);

     d3.selectAll('circle').each((d,i) => {
      d.info = this.data.nodes[i];
    });

    d3.selectAll('path').each((d,i) => {
      d.info = this.data.links[i];
    });

 this.simulation.on("tick", () => {
   this.link
       .attr("x1", d => d.source.x)
       .attr("y1", d => d.source.y)
       .attr("x2", d => d.target.x)
       .attr("y2", d => d.target.y);

   this.node
       .attr("cx", d => d.x)
       .attr("cy", d => d.y);
    });
 }


 drag(simulation){
   function dragstarted(d) {
     if (!d3.event.active) simulation.alphaTarget(0.3).restart();
     d.fx = d.x;
     d.fy = d.y;
   }
   function dragged(d) {
     d.fx = d3.event.x;
     d.fy = d3.event.y;
   }
   function dragended(d) {
     if (!d3.event.active) simulation.alphaTarget(0);
     d.fx = null;
     d.fy = null;
   }
   return d3.drag()
       .on("start", dragstarted)
       .on("drag", dragged)
       .on("end", dragended);
 }

 color() {
   const scale = d3.scaleOrdinal(d3.schemeCategory10);
   return d => scale(d.group);
 }

 blink() {
   this.blinkingQueue = [];
   this.value = -5;
   this.sharedSrvc.sendActiveNode(null);
  this.animate2();
 }

 animate(index?:number) {
  // send active node details to the details component
  this.sharedSrvc.sendActiveNode(this.data.nodes[index]);

  let startTime = new Date().getTime();
  
  this.value = this.value + 5;
  
  let blinker = window.setInterval( () => {
    $(`circle:nth-of-type(${index+1})`).toggle(".blink");
    if(new Date().getTime() - startTime > 5000){
      clearInterval(blinker);
      // pick the next ele from queue, find its original index and use that index
      this.blinkingIterator += 1;
      let nextEl = this.blinkingQueue[this.blinkingIterator];
      if (nextEl !== undefined){
        index = this.sharedSrvc.getNodeIndex(nextEl.id)
        console.log('next id to use is ', index);
        if (index < this.blinkingQueue.length) {
          this.animate(index);
        } else {
        return;
      }
    } else {
      this.sharedSrvc.sendActiveNode('done');
      this.value = this.value + 5;
      return
    };
 }
  }, 500);
 }

 animate2(index?:number) {
   let totalPaths = d3.selectAll('path')._groups[0].length;
   console.log(totalPaths);
    d3.selectAll('path')
    .each((link,i) => {
      let nodeSet = this.sharedSrvc.nodeDetailsByLink({source: link.info.source, target: link.info.target});
      this.blinkingQueue.push(nodeSet.source)
      if(i === totalPaths - 1){
        this.blinkingQueue.push(nodeSet.target);
      };

    });
    console.log(this.blinkingQueue);
    this.options.ceil = this.blinkingQueue.length*5;
    this.animate(0);
 }
}