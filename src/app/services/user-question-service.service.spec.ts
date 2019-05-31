import { TestBed } from '@angular/core/testing';

import { UserQuestionServiceService } from './user-question-service.service';

describe('UserQuestionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserQuestionServiceService = TestBed.get(UserQuestionServiceService);
    expect(service).toBeTruthy();
  });
});
