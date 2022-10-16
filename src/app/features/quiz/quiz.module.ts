import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { FillComponent } from './components/fill/fill.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import {QuizRoutingModule} from "./quiz-routing.module";



@NgModule({
  declarations: [
    MultipleChoiceComponent,
    FillComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
