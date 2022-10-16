import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  state = 1;

  changeState() {
    this.state = Math.floor(Math.random() * (4 - 1) + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
