import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { CashFlowSetupComponent } from './cash-flow-setup/cash-flow-setup.component';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [CommonModule, TopBarComponent, CashFlowSetupComponent],
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

  constructor() { }
  ngOnInit() {

  }
  setActiveButton(button: string) {
    this.activeButton = button;
  }


}
