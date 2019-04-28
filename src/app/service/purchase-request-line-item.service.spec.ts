import { TestBed } from '@angular/core/testing';

import { PurchaseRequestLineItemService } from './purchase-request-line-item.service';

describe('PurchaseRequestLineItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseRequestLineItemService = TestBed.get(PurchaseRequestLineItemService);
    expect(service).toBeTruthy();
  });
});
