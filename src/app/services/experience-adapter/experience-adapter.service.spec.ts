import { TestBed } from '@angular/core/testing';

import { ExperienceAdapterService } from './experience-adapter.service';

describe('ExperienceAdapterService', () => {
  let service: ExperienceAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
