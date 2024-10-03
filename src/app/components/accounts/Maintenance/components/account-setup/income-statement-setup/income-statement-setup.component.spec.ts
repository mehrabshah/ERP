import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStatementSetupComponent } from './income-statement-setup.component';

describe('IncomeStatementSetupComponent', () => {
  let component: IncomeStatementSetupComponent;
  let fixture: ComponentFixture<IncomeStatementSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeStatementSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeStatementSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
