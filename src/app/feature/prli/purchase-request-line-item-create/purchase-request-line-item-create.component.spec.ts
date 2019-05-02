import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-item-create.component';

describe('PurchaseRequestLineItemCreateComponent', () => {
  let component: PurchaseRequestLineItemCreateComponent;
  let fixture: ComponentFixture<PurchaseRequestLineItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
