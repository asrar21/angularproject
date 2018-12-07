import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.Canvas();
      }, 1000);
  }


  public Canvas():void {
    let md=false;
    
    const canvas=document.getElementById("a");
    canvas.addEventListener('mousedown',down);
    canvas.addEventListener('mouseup',toggleDraw);
    canvas.addEventListener('mousemove',
  function(evt):void{
    let mousepos=getMousePos(canvas,evt);
    let posx=mousepos.x;
    let posy=mousepos.y;
    draw(canvas,posx,posy);



  }
  
  );
    function down():void{
      md=true;
    }
    function toggleDraw():void{
      md=false;
      canvas.style.cursor="default";
    }
    function getMousePos(canvas,evt){
      let rect=canvas.getBoundingClientRect();
      return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
      };
    }
    function draw(canvas,posx,posy){
      let context=canvas.getContext("2d");
      if(md){
        canvas.style.cursor="pointer";
        context.fillRect(posx,posy,2,2);
      }
    }



  }
  ngOnInit() {
  }

}
