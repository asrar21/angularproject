import { Component } from '@angular/core';
// headers.append('Authorization', 'Basic ' + base64.encode('username:temppass'));
import { ViewChild } from '@angular/core';
// import {edfdecoder} from  'edfdecoder/dist/edfdecoder.umd.js';
// import {SpectrumPlot2} from './spectrum.js';
import { EdfService } from '../edf.service';
import { EdfDecoder } from 'edfdecoder/dist/edfdecoder.umd.js';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  fileToUpload: File = null;
 private navbarOpen:boolean=false;

 private nav:boolean=false;
  constructor(private http: HttpClient) { }
 
 

  ngOnInit() {
  
 this.nav=true;


  }
  public upload(){
    const fd=new FormData();
    fd.append('file',this.fileToUpload,this.fileToUpload.name);
    this.http.post('http://localhost:8080/api/file/upload/',fd).subscribe(res=>{
      console.log(res);
    })
    
  }
 
  onChange(files: FileList) {
    // var t=document.getElementById("fileInput");
    // this.data.dailyForecast(t);
    
    // this.data.dailyForecast(event);
    // let myEdf;
    // let reader = new FileReader();
   
    // if (event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsArrayBuffer(file);
     
    //   reader.onload = (event) => {
    //     let target:any = event.target;
    //     console.log(target.result);

    //     let decoder = new EdfDecoder();
    //     decoder.setInput(target.result);
    //     decoder.decode();
      
    //     myEdf = decoder.getOutput();
    //     console.log("Event",myEdf);
    //     // console.log("Event",   decoder.decode());
    //     // this.data.dailyForecast(myEdf);
    this.fileToUpload = files.item(0);
    console.log("EDF",this.fileToUpload);
    this.upload();
  

      }
     
    }