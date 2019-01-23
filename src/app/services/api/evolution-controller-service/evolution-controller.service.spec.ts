import { TestBed } from '@angular/core/testing';

import { EvolutionControllerService } from './evolution-controller.service';

describe('EvolutionControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvolutionControllerService = TestBed.get(EvolutionControllerService);
    expect(service).toBeTruthy();
  });
});
