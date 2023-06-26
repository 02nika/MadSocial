import { TestBed } from '@angular/core/testing';

import { AuthUtilitiesService } from './auth-utilities.service';

describe('AuthUtilitiesService', () => {
  let service: AuthUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
