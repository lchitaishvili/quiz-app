import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public userInfoForm: FormGroup;
  public optionsForm: FormGroup;
  public showTriviaOptions = false;

  constructor(private fb: FormBuilder, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.initUserInfoForm();
  }

  initUserInfoForm() {
    this.userInfoForm = this.fb.group({
      name: ''
    })
  }

  userInfoSubmitted() {
    this.initOptionsfoForm();
    this.showTriviaOptions = true;
  }

  initOptionsfoForm() {
    this.optionsForm = this.fb.group({
      category: '',
      difficulty: ''
    })
  }

  startTrivia() {
    const category = this.category.value;
    const difficulty = this.difficulty.value;

    this.questionsService.getQuestions(category, difficulty).pipe(
      tap(result => this.questionsService.setQuestions(result))
    ).subscribe();
  }

  backToUserInfo() {
    this.showTriviaOptions = false;
  }

  get userName() {
    return this.userInfoForm.get('name') as FormControl;
  }

  get category() {
    return this.optionsForm.get('category') as FormControl;
  }

  get difficulty() {
    return this.optionsForm.get('difficulty') as FormControl;
  }
}
