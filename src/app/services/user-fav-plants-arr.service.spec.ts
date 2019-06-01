import { TestBed } from '@angular/core/testing';

import { UserFavPlantsArrService } from './user-fav-plants-arr.service';

describe('UserFavPlantsArrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFavPlantsArrService = TestBed.get(UserFavPlantsArrService);
    expect(service).toBeTruthy();
  });
});
