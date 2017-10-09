import { TestBed, inject } from '@angular/core/testing';

import { IpayService } from './ipay.service';

describe('IpayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpayService]
    });
  });

  it('should be created', inject([IpayService], (service: IpayService) => {
    expect(service).toBeTruthy();
  }));
});
