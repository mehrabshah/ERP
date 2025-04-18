import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SALESRETURN } from '../../../../../shared/staticFiles/saleReturns';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sales-return',
  standalone: true,
  imports: [
    TopBarComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgSelectComponent,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,

  ],
  templateUrl: './sales-return.component.html',
  styleUrl: './sales-return.component.css',
})
export class SalesReturnComponent {
  toBarTitle: string = 'Sales Return';
  showtopNav: boolean = true;
  salesReturnForm!: FormGroup;
  filterId: number = 0;
  operatorId: number = 0;
  filteredItems: any[] = [];
  activeButton: string = 'All';
  activeFileButton: string = 'AllFile';
  activeOtherButton: string = '';

  items: any[] = SALESRETURN;


  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Sales Return',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/salesReturn',
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
    },
  ];

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


  createSaleReturns() {
     this.router.navigate(['/sales/transaction/salesReturnNew']);
  }

  isAllSelected(): boolean {
    return this.items.length > 0 && this.items.every((item) => item.selected);
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

  setOtherActive(buttonName: string) {
    this.activeOtherButton = buttonName;
  }

  setActive(buttonName: string) {
    this.activeButton = buttonName;

    this.filterItems();
  }


  filterItems() {
      

    if (this.activeButton === '') {
      this.filteredItems = [...this.items];
    } else if (this.activeButton === 'Returned') {
      this.filteredItems = this.items.filter(
        (item) => item.status === 'Dispatch'
      );
    } else if (this.activeButton === 'All') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(
        (item) => item.status === this.activeButton
      );
    }
  }



  toggleAll(event: any): void {
    const isChecked = event.target.checked;
    this.items.forEach((item) => (item.selected = isChecked));
  }

  updateSelection(): void {}

  ngOnInit(): void {
    this.filteredItems = [...this.items];
    this.salesReturnForm = new FormGroup({
      filter: new FormControl(null),
      operator: new FormControl(null),
      value: new FormControl(null),
    });
  }

  

}
