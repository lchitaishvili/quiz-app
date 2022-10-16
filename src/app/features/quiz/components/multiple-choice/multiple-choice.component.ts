import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss', '../../styles/answers.scss']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() correctIndex = NaN;
  @Input() incorrectIndex = NaN;
  @Input() selectedIndex = NaN;

  @Output() selectAnswer = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(i: number): void {
    this.selectAnswer.emit(i);
  }
}
