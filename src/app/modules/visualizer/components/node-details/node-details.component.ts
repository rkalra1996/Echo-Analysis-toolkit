import { Component, OnInit} from '@angular/core';
import { GraphDetailsService } from '../../services/graph-details-shared-service/graph-details.service';

@Component({
  selector: 'visualizer-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss']
})
export class NodeDetailsComponent implements OnInit{

  public node;

  constructor(private sharedSrvc: GraphDetailsService) { }

  ngOnInit() {
    this.sharedSrvc.activeNode.subscribe(node => {
      this.node = node;
      if (typeof this.node === 'string') {
        /* window.setTimeout(() => {
          this.node = null; 
        },2000); */
      }
    });
  }

}
