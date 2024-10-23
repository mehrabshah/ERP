import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { CashFlowSetupComponent } from './cash-flow-setup/cash-flow-setup.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { Router } from '@angular/router';
import { AccountSetupButtonComponent } from '../../../../../shared/account-setup-button/account-setup-button.component';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [CommonModule, TopBarComponent, CashFlowSetupComponent, AccountSettingsComponent,AccountSetupButtonComponent],
  templateUrl: './account-setup.component.html',
  styleUrl: './account-setup.component.css'
})
export class AccountSetupComponent {
  toBarTitle: string = 'Account setup Cash Flow Setup';
  showtopNav: boolean = true;

  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Account setup Cash Flow Setup',
      icon: 'fa fa-xmark',
      link: '/accounts/maintenance/accountSetup',
    },
    {
      id: '3',
      name: 'Sales Invoice',
      icon: 'fa fa-xmark',
    },
    {
      id: '4',
      name: 'Sales Return',
      icon: 'fa fa-xmark',
    }
  ];

  activeButton: string = 'cashFlow';

  constructor(private router:Router) { }
  ngOnInit() {

  }
  setActiveButton(button: string) {
    this.activeButton = button;
    if(button === 'accountSetting'){
      this.router.navigate(['/accounts/maintenance/accountSetting']);
    }
  }


}
