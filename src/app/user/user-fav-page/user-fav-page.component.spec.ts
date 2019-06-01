import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavPageComponent } from './user-fav-page.component';

describe('UserFavPageComponent', () => {
  let component: UserFavPageComponent;
  let fixture: ComponentFixture<UserFavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
