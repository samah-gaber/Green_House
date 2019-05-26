import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationCommentsCarouselComponent } from './plantation-comments-carousel.component';

describe('PlantationCommentsCarouselComponent', () => {
  let component: PlantationCommentsCarouselComponent;
  let fixture: ComponentFixture<PlantationCommentsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantationCommentsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantationCommentsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
