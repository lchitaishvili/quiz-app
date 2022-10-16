import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReadyComponent } from './question-ready.component';

describe('QuestionReadyComponent', () => {
  let component: QuestionReadyComponent;
  let fixture: ComponentFixture<QuestionReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
