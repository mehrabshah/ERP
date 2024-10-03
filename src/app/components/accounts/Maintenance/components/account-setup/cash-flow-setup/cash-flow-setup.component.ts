import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiSelectFieldComponent } from '../../../../../../shared/multi-select-field/multi-select-field.component';

@Component({
  selector: 'app-cash-flow-setup',
  standalone: true,
  imports: [CommonModule,NgbCollapseModule,NgbAccordionModule,MultiSelectFieldComponent],
  templateUrl: './cash-flow-setup.component.html',
  styleUrl: './cash-flow-setup.component.css'
})
export class CashFlowSetupComponent {
  selectedData: any = {};
  isCollapsed = false;
  isCollapsed1= false;
  isCollapsed2= false;
  isCollapsed3= false;

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


  updateSelectedItems(event: { label: string, selectedItems: any[] }) {
    if (event.selectedItems.length > 0) {
      this.selectedData[event.label] = event.selectedItems;
    } else {
      delete this.selectedData[event.label];
    }

    console.log('Updated selected data:', this.selectedData);
  }
}
