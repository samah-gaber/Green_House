import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCategorySliderComponent } from './plant-category-slider.component';

describe('PlantCategorySliderComponent', () => {
  let component: PlantCategorySliderComponent;
  let fixture: ComponentFixture<PlantCategorySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantCategorySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCategorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
