import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public userInfoForm: FormGroup;
  public showTriviaOptions = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initUserInfoForm();
  }

  initUserInfoForm() {
    this.userInfoForm = this.fb.group({
      name: ''
    })
  }

  setUserInfo() {
    this.showTriviaOptions = true;
  }

}
