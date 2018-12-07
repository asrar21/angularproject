import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
 

import { AppComponent } from './app.component';
import { AnalystComponent } from './analyst/analyst.component';
import { DoctorComponent } from './doctor/doctor.component';
import {RouterModule,Routes} from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { AnalystdashComponent } from './analystdash/analystdash.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { PsignupComponent } from './psignup/psignup.component';
import { LandingComponent } from './landing/landing.component';
import { DropzoneDirective } from './dropzone.directive';
import { EdfService } from './edf.service';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnalystComponent,
    DoctorComponent,
    PatientComponent,
    AnalystdashComponent,
    ChartComponent,
    HomeComponent,
    PsignupComponent,
    LandingComponent,
    DropzoneDirective,
   
  ],
  imports: [
    BrowserModule, HttpClientModule,NgxSpinnerModule,
    RouterModule.forRoot([
      {path:'analyst',component:AnalystComponent},
      {path:'doctor',component: DoctorComponent},
      {path:'patient',component:PatientComponent},
      {path:'adash',component:AnalystdashComponent},
      {path:'chart',component:ChartComponent},
      {path:'home',component:HomeComponent},
      {path:'psignup',component:PsignupComponent},
      {path:'landing',component:LandingComponent},

    ]),
    ChartsModule,
    HttpClientModule
  ],
  providers: [EdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
