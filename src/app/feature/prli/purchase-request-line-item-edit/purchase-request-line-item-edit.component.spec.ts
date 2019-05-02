import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-item-edit.component';

describe('PurchaseRequestLineItemEditComponent', () => {
  let component: PurchaseRequestLineItemEditComponent;
  let fixture: ComponentFixture<PurchaseRequestLineItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
