import { Injectable } from '@angular/core';
import {D3CoreService} from './../d3-core-service/d3-core.service';

@Injectable({
  providedIn: 'root'
})
export class D3ChartService {

  private D3: any;

  constructor(private d3coreSrvc: D3CoreService) {
    this.D3 = this.d3coreSrvc.D3Object;
   }

   get D3Object() {
     return this.D3;
   }

}
