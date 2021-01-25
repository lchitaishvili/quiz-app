import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaComponent implements OnInit {
  question: Question;

  constructor(
    private questionsService: QuestionsService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getNextQuestion();
  }

  getNextQuestion() {
    this.question = this.questionsService.getNextQuestion();
  }

  setScore(result: boolean) {
    let score = this.userService.getCurrentScore();

    if (result) {
      this.userService.setCurrentScore(score + 1)
    }
  }

  showResults() {
    this.router.navigateByUrl('results');
  }

  get currIndex() {
    return this.questionsService.getCurrIndex();
  }

  get amount() {
    return this.questionsService.getAmount();
  }
}
