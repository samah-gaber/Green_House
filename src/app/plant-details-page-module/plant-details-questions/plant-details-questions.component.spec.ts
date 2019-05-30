import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailsQuestionsComponent } from './plant-details-questions.component';

describe('PlantDetailsQuestionsComponent', () => {
  let component: PlantDetailsQuestionsComponent;
  let fixture: ComponentFixture<PlantDetailsQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDetailsQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
