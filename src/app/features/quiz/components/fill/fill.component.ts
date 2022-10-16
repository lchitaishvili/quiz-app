import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onDigitInput(event: any): void {
    let element;

    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if(element == null)
      return;
    else
      element.focus();
  }
}
