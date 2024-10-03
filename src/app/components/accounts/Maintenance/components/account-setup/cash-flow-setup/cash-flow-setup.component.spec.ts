import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowSetupComponent } from './cash-flow-setup.component';

describe('CashFlowSetupComponent', () => {
  let component: CashFlowSetupComponent;
  let fixture: ComponentFixture<CashFlowSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashFlowSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
