import { TestBed } from '@angular/core/testing';

import { ExperienceCardService } from './experience-card.service';

describe('ExperienceCardModelFactoryService', () => {
  let service: ExperienceCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
