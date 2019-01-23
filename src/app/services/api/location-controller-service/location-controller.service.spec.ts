import { TestBed } from '@angular/core/testing';

import { LocationControllerService } from './location-controller.service';

describe('LocationControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationControllerService = TestBed.get(LocationControllerService);
    expect(service).toBeTruthy();
  });
});
