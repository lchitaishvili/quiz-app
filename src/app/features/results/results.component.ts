import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [slowSlide],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  retry() {
    this.userService.setCurrentScore(0);
    this.questionsService.reset();
    this.router.navigateByUrl('info');
  }

  get name() {
    return this.userService.getName();
  }

  get score() {
    return this.userService.getCurrentScore();
  }

  get amount() {
    return this.questionsService.getAmount();
  }
}
