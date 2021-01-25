import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { slowSlide } from 'src/app/shared/animations/slow-slide.animation';
import { categories } from '../../../../shared/constants/dbCategories';
import { difficulties } from '../../../../shared/constants/dbDifficulties';

@Component({
  selector: 'app-trivia-options',
  templateUrl: './trivia-options.component.html',
  styleUrls: ['./trivia-options.component.scss'],
  animations: [slowSlide],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriviaOptionsComponent implements OnInit {
  public form: FormGroup;

  categories = categories;
  difficulties = difficulties;

  @Input() user: string;

  @Output() submitted = new EventEmitter();
  @Output() goBack = new EventEmitter();

  constructor(private cc: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.cc.control as FormGroup;
  }

  submit() {
    this.submitted.emit();
  }

  back() {
    this.goBack.emit();
  }

  get category() {
    return this.form.get('category') as FormControl;
  }

  get difficulty() {
    return this.form.get('difficulty') as FormControl;
  }
}
