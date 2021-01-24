import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public userInfoForm: FormGroup;
  public optionsForm: FormGroup;
  public showTriviaOptions = false;

  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initUserInfoForm();
  }

  initUserInfoForm(): void {
    this.userInfoForm = this.fb.group({
      name: this.userService.getName()
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

    this.questionsService.getQuestions(amount, category, difficulty)
    .pipe(
      tap(result => this.questionsService.setQuestions(result)),
      finalize(() => this.router.navigateByUrl('trivia'))
    ).subscribe();
  }

  setUser(name: string) {
    this.userService.setName(name);
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
