import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { MultiSelectFieldComponent } from '../../../../../shared/multi-select-field/multi-select-field.component';

@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [CommonModule, TopBarComponent, MultiSelectFieldComponent],
  templateUrl: './account-setup.component.html',
  styleUrl: './account-setup.component.css'
})
export class AccountSetupComponent {
  toBarTitle: string = 'Account setup Cash Flow Setup';
  showtopNav: boolean = true;
  selectedData: any = {};
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
  multiNetIncomeList = {
    label: 'Net Income',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetReceiveList = {
    label: 'Receivables',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetRawMaterialList = {
    label: 'Raw Material Inventory',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetWorkInventoryList = {
    label: 'Work In Progress Inventory',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetGoodsInventoryList = {
    label: 'Finished Goods Inventory',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetCustomerDepositList = {
    label: 'Customer Deposits',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetDepricationList = {
    label: 'Depriciations',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetPreExtensionList = {
    label: 'Prepaid Expenses',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetPayablesList = {
    label: 'Payables',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetAccurExpensesList = {
    label: 'Accured Expenses',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  multiNetLoansList = {
    label: 'Loans',
    data: [
      { item_id: 1, item_text: 'Sales Income' },
      { item_id: 2, item_text: 'Sales Income' },
      { item_id: 3, item_text: 'Sales Income' },
      { item_id: 4, item_text: 'Sales Income' },
      { item_id: 5, item_text: 'Sales Income' }
    ]
  }

  constructor(){}
  ngOnInit() {
   
  }
  setActiveButton(button: string) {
    this.activeButton = button;
  }

  updateSelectedItems(event: { label: string, selectedItems: any[] }) {
    if (event.selectedItems.length > 0) {
      this.selectedData[event.label] = event.selectedItems;
    } else {
      delete this.selectedData[event.label];
    }

    console.log('Updated selected data:', this.selectedData);
  }


}
