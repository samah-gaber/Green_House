import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationSingleCommentComponent } from './plantation-single-comment.component';

describe('PlantationSingleCommentComponent', () => {
  let component: PlantationSingleCommentComponent;
  let fixture: ComponentFixture<PlantationSingleCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationSingleCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationSingleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
