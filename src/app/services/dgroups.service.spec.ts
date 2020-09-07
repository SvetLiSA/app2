import { TestBed } from '@angular/core/testing';

import { DgroupsService } from './dgroups.service';

describe('DgroupsService', () => {
  let service: DgroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
