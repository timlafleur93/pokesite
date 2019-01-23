import { TestBed } from '@angular/core/testing';

import { ItemControllerService } from './item-controller.service';

describe('ItemControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemControllerService = TestBed.get(ItemControllerService);
    expect(service).toBeTruthy();
  });
});
