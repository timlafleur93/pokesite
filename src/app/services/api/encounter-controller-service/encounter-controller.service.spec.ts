import { TestBed } from '@angular/core/testing';

import { EncounterControllerService } from './encounter-controller.service';

describe('EncounterControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncounterControllerService = TestBed.get(EncounterControllerService);
    expect(service).toBeTruthy();
  });
});
