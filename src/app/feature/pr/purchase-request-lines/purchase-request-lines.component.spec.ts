import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLinesComponent } from './purchase-request-lines.component';

describe('PurchaseRequestLinesComponent', () => {
  let component: PurchaseRequestLinesComponent;
  let fixture: ComponentFixture<PurchaseRequestLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
