import { TestBed } from '@angular/core/testing';

import { PurchaseRequestService } from './purchase-request.service';

describe('PurchaseRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseRequestService = TestBed.get(PurchaseRequestService);
    expect(service).toBeTruthy();
  });
});
