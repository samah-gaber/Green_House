import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCarouselsComponent } from './landing-page-carousels.component';

describe('LandingPageCarouselsComponent', () => {
  let component: LandingPageCarouselsComponent;
  let fixture: ComponentFixture<LandingPageCarouselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageCarouselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
