import { TestBed } from '@angular/core/testing';

import { RegistrationForTheExcursionService } from './registration-for-the-excursion.service';

describe('RegistrationForTheExcursionService', () => {
  let service: RegistrationForTheExcursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationForTheExcursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
