import { TestBed } from '@angular/core/testing';

import { PokemonControllerService } from './pokemon-controller.service';

describe('PokemonControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonControllerService = TestBed.get(PokemonControllerService);
    expect(service).toBeTruthy();
  });
});
