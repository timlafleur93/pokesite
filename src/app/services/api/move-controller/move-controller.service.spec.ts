import { TestBed } from '@angular/core/testing';

import { MoveControllerService } from './move-controller.service';

describe('MoveControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveControllerService = TestBed.get(MoveControllerService);
    expect(service).toBeTruthy();
  });
});
