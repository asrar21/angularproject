import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
  
})
export class EdfService {
  public edf=[];

  constructor(private _http: HttpClient) { }
  dailyForecast(fileToUpload: File) {
   this._http.post("http://localhost:8080/api/file/upload",fileToUpload).subscribe(
     res=>{
     console.log(res);
     })
    
   

}
}
