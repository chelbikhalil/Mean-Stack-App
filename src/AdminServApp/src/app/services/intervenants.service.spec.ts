import { TestBed, inject } from '@angular/core/testing';

import { intervenantService } from './intervenants.service';

describe('IntervenantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [intervenantService]
    });
  });

  it('should be created', inject([intervenantService], (service: intervenantService) => {
    expect(service).toBeTruthy();
  }));
});
