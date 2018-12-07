import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.openForm();
      }, 2000);
  }
  public openForm():void {
    // document.getElementById("tbody").innerHTML="<tr><td>|Firstname|</td><td>lastname|</td><td>status|</td></tr>"+"<tr><td>|sohail|</td><td>haroon|</td><td>complete|</td></tr>";
    var tbody = document.getElementById('tbody');
  

    
    
    var tr = "<tr>";

tr += "<td> "+"<h1>FirstName</h1>"+ "</td>" + "<td> "+"<h1>LastName</h1>"+  "</td>"+"<td><h1>Status</h1></td></tr>";
tr +=  "<td> "+"Asrar"+ "</td>" + "<td> "+"Alam"+  "</td>"+"<td><a>Complete</a></td></tr>";
tr +=  "<td> "+"zubair"+ "</td>" + "<td> "+"Ahmed"+  "</td>"+"<td><a>Complete</a></td></tr>";
tr +=  "<td> "+"rias"+ "</td>" + "<td> "+"Ahmed"+  "</td>"+"<td><a>Analysing</a></td></tr>";
tr +=  "<td> "+"faraz"+ "</td>" + "<td> "+"khan"+  "</td>"+"<td><a>Complete</a></td></tr>";
tbody.innerHTML += tr;
  }


  ngOnInit() {
  }

}
