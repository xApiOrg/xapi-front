import { TestBed, inject } from '@angular/core/testing';

import { DataValidationService } from './data-validation.service';

describe('DataValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataValidationService]
    });
  });

  it('should be created', inject([DataValidationService], (service: DataValidationService) => {
    expect(service).toBeTruthy();
  }));
});
