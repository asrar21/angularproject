import { Component} from '@angular/core';
import { EdfService } from '../edf.service';
import { Chart } from 'chart.js';
// import '/rxjs/_esm5/internal/operators/map';
// import {edfdecoder} from  'edfdecoder/dist/edfdecoder.umd.js';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

 
  constructor (private httpService: HttpClient) { }

  // ADD CHART OPTIONS. 
 

  ngOnInit () {
     
  }

 public close():void{
     document.getElementById("nav-header").style.width='250px';
     document.getElementById("bar").style.width='200px';


 }
 
  

}