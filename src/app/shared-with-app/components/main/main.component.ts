import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { LoadingService } from 'src/app/shared/services/loading.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public userInfoForm: FormGroup;
  public optionsForm: FormGroup;
  public showTriviaOptions = false;

  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private userService: UserService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initUserInfoForm();
    this.reset();
  }

  initUserInfoForm(): void {
    this.userInfoForm = this.fb.group({
      name: [this.userService.getName(), [Validators.maxLength(30)]]
    })
  }

  userInfoSubmitted(): void {
    this.setUser(this.userName.value);
    this.initOptionsfoForm();
    this.showTriviaOptions = true;
  }

  initOptionsfoForm(): void {
    this.optionsForm = this.fb.group({
      category: '',
      difficulty: ''
    })
  }

  backToUserInfo(): void {
    this.showTriviaOptions = false;
  }

  startTrivia(): void {
    const amount = 10;
    const category = this.category.value;
    const difficulty = this.difficulty.value;
    this.loadingService.show();

    this.questionsService.getQuestions(amount, category, difficulty)
    .pipe(
      tap(result => this.questionsService.setQuestions(result)),
      finalize(() => {
        this.loadingService.hide();
        this.router.navigateByUrl('trivia')
      })
    ).subscribe();
  }

  reset() {
    this.userService.setCurrentScore(0);
    this.questionsService.reset();
  }

  setUser(name: string): void {
    this.userService.setName(name);
  }

  get user(): string {
    return this.userService.getName();
  }

  get userName(): FormControl {
    return this.userInfoForm.get('name') as FormControl;
  }

  get category(): FormControl {
    return this.optionsForm.get('category') as FormControl;
  }

  get difficulty(): FormControl {
    return this.optionsForm.get('difficulty') as FormControl;
  }
}
