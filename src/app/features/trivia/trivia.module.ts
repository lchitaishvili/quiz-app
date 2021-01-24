import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaComponent } from './trivia.component';
import { SharedModule } from '../../shared/shared.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    TriviaComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TriviaModule { }
