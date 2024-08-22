import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAndBankComponent } from './cash-and-bank.component';

describe('CashAndBankComponent', () => {
  let component: CashAndBankComponent;
  let fixture: ComponentFixture<CashAndBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashAndBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashAndBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
