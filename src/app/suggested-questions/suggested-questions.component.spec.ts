import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedQuestionsComponent } from './suggested-questions.component';

describe('SuggestedQuestionsComponent', () => {
  let component: SuggestedQuestionsComponent;
  let fixture: ComponentFixture<SuggestedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
