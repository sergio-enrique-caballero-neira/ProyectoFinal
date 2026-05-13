import { TestBed } from '@angular/core/testing';

import { VirusTotalSerivice } from './virus-total-serivice';

describe('VirusTotalSerivice', () => {
  let service: VirusTotalSerivice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirusTotalSerivice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
