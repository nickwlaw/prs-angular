import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestCreateComponent } from './purchase-request-create.component';

describe('PurchaseRequestCreateComponent', () => {
  let component: PurchaseRequestCreateComponent;
  let fixture: ComponentFixture<PurchaseRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
