import { TestBed } from '@angular/core/testing';

import { ExperienceCardModelService } from './experience-card-model.service';

describe('ExperienceCardModelFactoryService', () => {
  let service: ExperienceCardModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceCardModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
