import { TestBed } from '@angular/core/testing';

import { ClashRoyaleService } from './clash-royale.service';

describe('ClashRoyaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClashRoyaleService = TestBed.get(ClashRoyaleService);
    expect(service).toBeTruthy();
  });
});
