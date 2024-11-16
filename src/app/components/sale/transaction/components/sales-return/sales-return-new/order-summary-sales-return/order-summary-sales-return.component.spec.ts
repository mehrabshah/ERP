import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummarySalesReturnComponent } from './order-summary-sales-return.component';

describe('OrderSummarySalesReturnComponent', () => {
  let component: OrderSummarySalesReturnComponent;
  let fixture: ComponentFixture<OrderSummarySalesReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummarySalesReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummarySalesReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
