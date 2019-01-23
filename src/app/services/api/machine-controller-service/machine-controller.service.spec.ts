import { TestBed } from '@angular/core/testing';

import { MachineControllerService } from './machine-controller.service';

describe('MachineControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineControllerService = TestBed.get(MachineControllerService);
    expect(service).toBeTruthy();
  });
});
