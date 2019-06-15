import { TestBed } from '@angular/core/testing';

import { PlantationQuestionServiceService } from './plantation-question-service.service';

describe('PlantationQuestionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantationQuestionServiceService = TestBed.get(PlantationQuestionServiceService);
    expect(service).toBeTruthy();
  });
});
