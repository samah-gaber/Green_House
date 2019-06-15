import { TestBed } from '@angular/core/testing';

import { PlantationServiceService } from './plantation-service.service';

describe('PlantationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantationServiceService = TestBed.get(PlantationServiceService);
    expect(service).toBeTruthy();
  });
});
