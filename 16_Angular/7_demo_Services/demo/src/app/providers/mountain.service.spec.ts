import { TestBed } from '@angular/core/testing';

import { MountainService } from './mountain.service';

describe('MountainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MountainService = TestBed.get(MountainService);
    expect(service).toBeTruthy();
  });
});
