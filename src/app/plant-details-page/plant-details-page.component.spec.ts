import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailsPageComponent } from './plant-details-page.component';

describe('PlantDetailsPageComponent', () => {
  let component: PlantDetailsPageComponent;
  let fixture: ComponentFixture<PlantDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
