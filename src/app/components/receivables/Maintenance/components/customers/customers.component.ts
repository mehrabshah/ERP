import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
} from '@ng-select/ng-select';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { Customers } from '../../../../../shared/staticFiles/customers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgSelectComponent,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  toBarTitle: string = 'Customers';
  showtopNav: boolean = true;

  customersForm!: FormGroup;
  filterId: number = 0;
  operatorId: number = 0;
  activeFileButton: string = 'AllFile';
  items: any[] = Customers;
  filteredItems: any[] = [];

  filterData = [
    { id: 1, name: 'Filter 1' },
    { id: 2, name: 'Filter 2' },
    { id: 3, name: 'Filter 3' },
  ];
  operatorData = [
    { id: 1, name: 'operator 1' },
    { id: 2, name: 'operaotr 2' },
    { id: 3, name: 'operator 3' },
  ];

  constructor(private router: Router) {
  }


  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Customers',
      icon: 'fa fa-xmark',
      link: '/receivable/maintenance/customers',
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

  createCustomers() {
    this.router.navigate(['receivable/maintenance/customers/newCustomers']);
  }

  onfilterSelected(event: any) {
    let id = event.id;
    if (id) {
      this.filterId = id;
    }
  }
  onCustomerSelected(event: any) {
    let id = event.id;
    if (id) {
      this.operatorId = id;
    }
  }

  setActiveFile(buttonName: string) {
    this.activeFileButton = buttonName;
  }

  toggleAll(event: any): void {
    const isChecked = event.target.checked;
    this.items.forEach((item) => (item.selected = isChecked));
  }
  isAllSelected(): boolean {
    return this.items.length > 0 && this.items.every((item) => item.selected);
  }
  updateSelection(): void {}

  ngOnInit(): void {
    this.filteredItems = [...this.items];
    this.customersForm = new FormGroup({
      filter: new FormControl(null),
      operator: new FormControl(null),
      value: new FormControl(null),
    });
  }
}
