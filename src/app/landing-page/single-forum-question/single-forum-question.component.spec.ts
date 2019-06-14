import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleForumQuestionComponent } from './single-forum-question.component';

describe('SingleForumQuestionComponent', () => {
  let component: SingleForumQuestionComponent;
  let fixture: ComponentFixture<SingleForumQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleForumQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleForumQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
