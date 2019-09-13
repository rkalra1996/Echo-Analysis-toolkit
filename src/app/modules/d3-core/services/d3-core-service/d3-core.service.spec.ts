import { TestBed } from '@angular/core/testing';

import { D3CoreService } from './d3-core.service';

describe('D3CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D3CoreService = TestBed.get(D3CoreService);
    expect(service).toBeTruthy();
  });
});
