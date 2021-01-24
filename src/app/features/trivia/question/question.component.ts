import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { slideUp } from 'src/app/shared/animations/slide-up.animation';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { Question } from 'src/app/shared/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [slowSlide, slideUp]
})
export class QuestionComponent implements OnInit, OnChanges {
  public userAnswer: string;

  @Input() question: Question;
  @Input() currIndex: number;
  @Input() amount: number;

  @Output() next = new EventEmitter<void>();
  @Output() showResults = new EventEmitter<void>();
  @Output() processResult = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  getResult(answer: string) {
    this.userAnswer = answer;
    const result = answer === this.question.correct_answer;
    this.processResult.emit(result);

    return result;
  }

  nextQuestion() {
    this.userAnswer = null;
    this.next.emit();
  }

  goToResults() {
    this.showResults.emit();
  }

  get isLastQuestion() {
    return this.currIndex === this.amount - 1;
  }
}
