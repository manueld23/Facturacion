import { TestBed } from '@angular/core/testing';

import { CProdNProService } from './cprod-npro.service';

describe('CProdNProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CProdNProService = TestBed.get(CProdNProService);
    expect(service).toBeTruthy();
  });
});
