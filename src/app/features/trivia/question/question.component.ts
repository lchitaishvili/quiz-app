import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { slideUp } from 'src/app/shared/animations/slide-up.animation';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { Question } from 'src/app/shared/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [slowSlide, slideUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  public userAnswer: string;

  @Input() question: Question;
  @Input() currIndex: number;
  @Input() amount: number;

  @Output() next = new EventEmitter<void>();
  @Output() showResults = new EventEmitter<void>();
  @Output() processResult = new EventEmitter<boolean>();

  getResult(buttonText: string) {
    this.userAnswer = buttonText;
    const result = buttonText === this.question.correct_answer;
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

  getButtonClass(buttonText: string): string {
    if (this.userAnswer && buttonText === this.question.correct_answer) {
      return 'correct';
    }

    if (buttonText === this.userAnswer) {
      return buttonText === this.question.correct_answer ? 'correct' : 'incorrect';
    }
  }
}
