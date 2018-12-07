import { TestBed } from '@angular/core/testing';

import { EdfService } from './edf.service';

describe('EdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdfService = TestBed.get(EdfService);
    expect(service).toBeTruthy();
  });
});
