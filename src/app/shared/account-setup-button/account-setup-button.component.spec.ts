import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetupButtonComponent } from './account-setup-button.component';

describe('AccountSetupButtonComponent', () => {
  let component: AccountSetupButtonComponent;
  let fixture: ComponentFixture<AccountSetupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSetupButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSetupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
