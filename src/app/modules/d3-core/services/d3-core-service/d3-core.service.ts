import { Injectable } from '@angular/core';
import * as D3Core from 'd3';

@Injectable({
  providedIn: 'root'
})
export class D3CoreService {
  private D3;
  constructor() {
    this.D3 = D3Core;
   }

   /**
    * Gets d3 object
    * @description This function returns original D3 object
    * @param none
    */
   get D3Object() {
     return this.D3;
   }
}
