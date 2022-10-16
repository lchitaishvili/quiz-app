import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public selectedAnswerIndex = NaN;
  public correctAnswerIndex = NaN;
  public incorrectAnswerIndex = NaN;

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.correctAnswerIndex = 2;
    if (this.selectedAnswerIndex !== this.correctAnswerIndex) {
      this.incorrectAnswerIndex = this.selectedAnswerIndex;
    }
  }

  public selectAnswer(index: number): void {
    this.selectedAnswerIndex = index;
  }

}
