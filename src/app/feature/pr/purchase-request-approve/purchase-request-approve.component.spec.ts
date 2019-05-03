import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestApproveComponent } from './purchase-request-approve.component';

describe('PurchaseRequestApproveComponent', () => {
  let component: PurchaseRequestApproveComponent;
  let fixture: ComponentFixture<PurchaseRequestApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
