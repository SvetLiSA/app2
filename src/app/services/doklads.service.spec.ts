import { TestBed } from '@angular/core/testing';

import { DokladsService } from './doklads.service';

describe('DokladsService', () => {
  let service: DokladsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DokladsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
