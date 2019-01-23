import { TestBed } from '@angular/core/testing';

import { ContestControllerService } from './contest-controller.service';

describe('ContestControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestControllerService = TestBed.get(ContestControllerService);
    expect(service).toBeTruthy();
  });
});
