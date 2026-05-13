import { TestBed } from '@angular/core/testing';

import { Darktheme } from './darktheme';

describe('Darktheme', () => {
  let service: Darktheme;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Darktheme);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
