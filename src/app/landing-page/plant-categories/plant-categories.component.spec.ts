import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCategoriesComponent } from './plant-categories.component';

describe('PlantCategoriesComponent', () => {
  let component: PlantCategoriesComponent;
  let fixture: ComponentFixture<PlantCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
