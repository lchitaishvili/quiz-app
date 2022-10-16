import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { QuestionReadyComponent } from './components/question-ready/question-ready.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { NoInfoComponent } from './components/no-info/no-info.component';
import {CountdownModule} from "ngx-countdown";



@NgModule({
  declarations: [
    DashboardComponent,
    QuestionReadyComponent,
    CountdownComponent,
    NoInfoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CountdownModule,
  ]
})
export class DashboardModule { }
