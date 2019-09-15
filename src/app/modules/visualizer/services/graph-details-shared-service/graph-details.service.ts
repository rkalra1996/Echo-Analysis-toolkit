import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDetailsService {

  public activeNode = new BehaviorSubject<object>(null);

  constructor() { }

  sendActiveNode(activeNode) {
    this.activeNode.next(activeNode);
  }

  get graphData() {
    return {
      nodes: [
      {
      id: "Sean Connery",
      name: "Sean Connery",
      group: 1,
      value: 0,
      time: 0
      },
      {
      id: "Roger Moore",
      name: "Roger Moore",
      group: 2,
      value: 1,
      time: 1
      },
      {
      id: "Pierce Brosnan",
      name: "Pierce Brosnan",
      group: 2,
      value: 2,
      time: 2
      },
      {
      id: "Ghost Ship",
      name: "Ghost Ship",
      group: 2,
      value: 3,
      time: 3
      },
      {
      id: "Gestolene Herzen",
      name: "Gestolene Herzen",
      group: 2,
      value: 4,
      time: 4
      },
      {
      id: "Band of Brothers",
      name: "Band of Brothers",
      group: 2,
      value: 5,
      time: 5
      },
      {
      id: "Mit aller Macht",
      name: "Mit aller Macht",
      group: 2,
      value: 6,
      time: 6
      },
      ],
      links: [
        {source: "Sean Connery", target: "Roger Moore", value: 1},
        {source: "Roger Moore", target: "Pierce Brosnan", value: 1},
        {source: "Pierce Brosnan", target: "Ghost Ship", value: 1},
        {source: "Ghost Ship", target: "Gestolene Herzen", value: 1},
        {source: "Gestolene Herzen", target: "Band of Brothers", value: 1},
        {source: "Band of Brothers", target: "Sean Connery", value: 1},
        {source: "Sean Connery", target: "Mit aller Macht", value: 1},
        {source: "Mit aller Macht", target: "Gestolene Herzen", value: 1}
      ]
      };
  }

  nodeDetailsByLink(link: {source: string, target: string}) {
    let sourceNode;
    let targetNode;
      let indexS = this.graphData.nodes.findIndex(node => {
        return node.id === link.source;
      });
      let indexT = this.graphData.nodes.findIndex(node => {
        return node.id === link.target;
      });
      if (indexS === undefined) {
        console.log('source node index not found', link.source);
        sourceNode = null;
      } else {
        // get the node
        sourceNode = this.graphData.nodes[indexS]
      }
      if (indexT === undefined) {
        console.log('source node index not found', link.target);
        targetNode = null;
      } else {
        targetNode = this.graphData.nodes[indexT]
      }
      return {source: sourceNode, target: targetNode};
  }

  getNodeIndex(nodeName) {
    return this.graphData.nodes.findIndex(node => node.name === nodeName);
  }
}
