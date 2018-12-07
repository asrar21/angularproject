import { Component } from '@angular/core';

@Component({
  selector: 'app-analystdash',
  templateUrl: './analystdash.component.html',
  styleUrls: ['./analystdash.component.css']
})
export class AnalystdashComponent{

 constructor(){
   setTimeout(() => {
   this.openForm();
   }, 2000);
 }
 public openForm():void {
  document.getElementById("myModal").style.display = "block";
}


    public close():void {
    document.getElementById("myModal").style.display = "none";
  }
  
}
