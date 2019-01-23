import { TestBed } from '@angular/core/testing';

import { BerryControllerService } from './berry-controller.service';

describe('BerryControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BerryControllerService = TestBed.get(BerryControllerService);
    expect(service).toBeTruthy();
  });
});
