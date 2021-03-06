import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaComponent } from './components/trivia.component';
import { SharedModule } from '../../shared/shared.module';
import { QuestionComponent } from './components/question/question.component';
import { TriviaRoutingModule } from './trivia-routing.module';

@NgModule({
  declarations: [
    TriviaComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TriviaRoutingModule
  ]
})
export class TriviaModule { }
