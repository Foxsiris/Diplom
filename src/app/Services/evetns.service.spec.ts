import { TestBed } from '@angular/core/testing';

import { EvetnsService } from './evetns.service';

describe('EvetnsService', () => {
  let service: EvetnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvetnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
