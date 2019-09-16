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
          id: "Dr. Anand Vishwas",
          name: "Dr. Anand Vishwas",
          group: 1,
          value: 0,
          gender: 'Male',
          videoStatus: 'On',
          duration: '10 mins',
          location: 'Bangalore',
          tone: 'Positive',
          time: 0
        },
        {
          id: "Dr. Binny Roger",
          name: "Dr. Binny Roger",
          group: 2,
          value: 1,
          gender: 'Male',
          videoStatus: 'Off',
          duration: '20 mins',
          location: 'Chandigarh',
          tone: 'Positive',
          time: 1
        },
        {
          id: "Dr. Akshay Bhatia",
          name: "Dr. Akshay Bhatia",
          group: 2,
          value: 2,
          gender: 'Male',
          videoStatus: 'On',
          duration: '15 mins',
          location: 'Jharkand',
          tone: 'Neutral',
          time: 2
        },
        {
          id: "Dr. Sanjay Arora",
          name: "Dr. Sanjay Arora",
          group: 2,
          value: 3,
          gender: 'Male',
          videoStatus: 'On',
          duration: '20 mins',
          location: 'Shimla',
          tone: 'Negative',
          time: 3
        },
        {
          id: "Dr. Vijay Kumar",
          name: "Dr. Vijay Kumar",
          group: 2,
          value: 4,
          gender: 'Male',
          videoStatus: 'On',
          duration: '20 mins',
          location: 'New Delhi',
          tone: 'Positive',
          time: 4
        },
        {
          id: "Dr. Sumita Patil",
          name: "Dr. Sumita Patil",
          group: 2,
          value: 5,
          gender: 'Female',
          videoStatus: 'Off',
          duration: '20 mins',
          location: 'Bangalore',
          tone: 'Negative',
          time: 5
        },
        {
          id: "Dr. Riya Bansal",
          name: "Dr. Riya Bansal",
          group: 2,
          value: 6,
          gender: 'Female',
          videoStatus: 'Off',
          duration: '30 mins',
          location: 'Kerala',
          tone: 'Positive',
          time: 6
        },
        {
          id: "Dr. Sonam Ahuja",
          name: "Dr. Sonam Ahuja",
          group: 2,
          value: 6,
          gender: 'Female',
          videoStatus: 'On',
          duration: '30 mins',
          location: 'UT of J&K',
          tone: 'Positive',
          time: 6
        },
        {
          id: "Dr. Deepak Jhangra",
          name: "Dr. Deepak Jhangra",
          group: 2,
          value: 6,
          gender: 'Male',
          videoStatus: 'On',
          duration: '10 mins',
          location: 'Goa',
          tone: 'Negative',
          time: 6
        },
        {
          id: "Dr. Abhishek Chaudhary",
          name: "Dr. Abhishek Chaudhary",
          group: 2,
          value: 6,
          gender: 'Male',
          videoStatus: 'Off',
          duration: '15 mins',
          location: 'Bangalore',
          tone: 'Neutral',
          time: 6
        }
      ],
      links: [
        { source: "Dr. Anand Vishwas", target: "Dr. Binny Roger", value: 1 },
        { source: "Dr. Binny Roger", target: "Dr. Akshay Bhatia", value: 1 },
        { source: "Dr. Akshay Bhatia", target: "Dr. Sanjay Arora", value: 1 },
        { source: "Dr. Sanjay Arora", target: "Dr. Vijay Kumar", value: 1 },
        { source: "Dr. Vijay Kumar", target: "Dr. Sumita Patil", value: 1 },
        { source: "Dr. Sumita Patil", target: "Dr. Anand Vishwas", value: 1 },
        { source: "Dr. Anand Vishwas", target: "Dr. Riya Bansal", value: 1 },
        { source: "Dr. Riya Bansal", target: "Dr. Vijay Kumar", value: 1 },
        { source: "Dr. Vijay Kumar", target: "Dr. Sonam Ahuja", value: 1 },
        { source: "Dr. Sonam Ahuja", target: "Dr. Deepak Jhangra", value: 1 },
        { source: "Dr. Deepak Jhangra", target: "Dr. Abhishek Chaudhary", value: 1 },
        { source: "Dr. Abhishek Chaudhary", target: "Dr. Vijay Kumar", value: 1 },
        { source: "Dr. Vijay Kumar", target: "Dr. Riya Bansal", value: 1 },
        { source: "Dr. Riya Bansal", target: "Dr. Deepak Jhangra", value: 1 },
        { source: "Dr. Deepak Jhangra", target: "Dr. Anand Vishwas", value: 1 },
      ]
    };
  }

  nodeDetailsByLink(link: { source: string, target: string }) {
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
    return { source: sourceNode, target: targetNode };
  }

  getNodeIndex(nodeName) {
    return this.graphData.nodes.findIndex(node => node.name === nodeName);
  }
}
