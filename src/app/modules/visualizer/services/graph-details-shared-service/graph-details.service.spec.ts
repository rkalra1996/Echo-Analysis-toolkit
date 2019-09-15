import { TestBed } from '@angular/core/testing';

import { GraphDetailsService } from './graph-details.service';

describe('GraphDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphDetailsService = TestBed.get(GraphDetailsService);
    expect(service).toBeTruthy();
  });
});
