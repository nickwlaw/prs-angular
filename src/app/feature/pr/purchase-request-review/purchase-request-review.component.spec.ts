import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestReviewComponent } from './purchase-request-review.component';

describe('PurchaseRequestReviewComponent', () => {
  let component: PurchaseRequestReviewComponent;
  let fixture: ComponentFixture<PurchaseRequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
