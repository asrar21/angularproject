import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyst',
  templateUrl: './analyst.component.html',
  styleUrls: ['./analyst.component.css']
})
export class AnalystComponent implements OnInit {

  constructor() { 
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
  ngOnInit() {
  }

}
