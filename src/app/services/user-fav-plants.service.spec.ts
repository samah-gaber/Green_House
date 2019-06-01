import { TestBed } from '@angular/core/testing';

import { UserFavPlantsService } from './user-fav-plants.service';

describe('UserFavPlantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFavPlantsService = TestBed.get(UserFavPlantsService);
    expect(service).toBeTruthy();
  });
});
