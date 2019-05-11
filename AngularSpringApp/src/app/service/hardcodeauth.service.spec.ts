import { TestBed } from '@angular/core/testing';

import { HardcodeauthService } from './hardcodeauth.service';

describe('HardcodeauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodeauthService = TestBed.get(HardcodeauthService);
    expect(service).toBeTruthy();
  });
});
