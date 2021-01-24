import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaComponent } from './trivia.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TriviaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TriviaModule { }
