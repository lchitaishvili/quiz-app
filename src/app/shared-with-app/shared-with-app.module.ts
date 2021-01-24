import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { UserInfoComponent } from './components/main/user-info/user-info.component';
import { TriviaOptionsComponent } from './components/main/trivia-options/trivia-options.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    MainComponent,
    UserInfoComponent,
    TriviaOptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    MainComponent,
    UserInfoComponent,
    TriviaOptionsComponent
  ],
})
export class SharedWithAppModule { }
