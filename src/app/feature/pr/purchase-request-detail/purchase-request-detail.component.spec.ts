import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestDetailComponent } from './purchase-request-detail.component';

describe('PurchaseRequestDetailComponent', () => {
  let component: PurchaseRequestDetailComponent;
  let fixture: ComponentFixture<PurchaseRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
