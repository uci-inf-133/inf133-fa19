import { TestBed } from '@angular/core/testing';

import { ParsePublicationsService } from './parse-publications.service';

describe('ParsePublicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsePublicationsService = TestBed.get(ParsePublicationsService);
    expect(service).toBeTruthy();
  });
});
