import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
 

  ngOnInit() {
    // this.spinner.show();
 
    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 10000);
  }

  public close():void{
    this.spinner.hide();
  }
  public open():void{
    this.spinner.show();
  }


}

