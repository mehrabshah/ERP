import { Component } from '@angular/core';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table/table.component';
import { SALES } from '../../shared/table/staticFiles/sales';
import { Router } from '@angular/router';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule,TopBarComponent, TableComponent, ReactiveFormsModule ,
    FormsModule,NgSelectModule,NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective,],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  toBarTitle:string= 'Dashboard';

  salesFilterForm!: FormGroup;

  filterId: number = 0;
  operatorId: number = 0;

  items: any[] = SALES;
  filteredItems: any[] = [];

  activeButton: string = 'All'; 
  activeFileButton: string = 'AllFile';
  activeOtherButton: string = '';


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

  ngOnInit(): void {
    this.filteredItems = [...this.items];

    this.salesFilterForm = new FormGroup({
      filter: new FormControl(null),
      operator: new FormControl(null),
      value: new FormControl(null),
    })
  }

  toggleAll(event: any): void {
    const isChecked = event.target.checked;
    this.items.forEach(item => item.selected = isChecked);
  }

  isAllSelected(): boolean {
    return this.items.length > 0 && this.items.every(item => item.selected);
  }

  updateSelection(): void {
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



  setActive(buttonName: string) {
    this.activeButton = buttonName;
    this.filterItems();
  }

  filterItems() {
    if (this.activeButton === '') {
      this.filteredItems = [...this.items];
    } else if (this.activeButton === 'Returned') {
      this.filteredItems = this.items.filter(item => item.status === 'Dispatch');
    } else if (this.activeButton === 'All') {
      this.filteredItems = [...this.items];
    }
    else {
      this.filteredItems = this.items.filter(item => item.status === this.activeButton);
    }
  }
  

  setActiveFile(buttonName: string) {
    this.activeFileButton = buttonName;
  }

  setOtherActive(buttonName: string) {
    this.activeOtherButton = buttonName;
  }

  createSaleOrder(){
    this.router.navigate(['/sales/transaction/arReceipt']);
  }
}
