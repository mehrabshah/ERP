import { Component } from '@angular/core';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table/table.component';
import { FormsModule } from '@angular/forms';
import { SALES } from '../../shared/table/staticFiles/sales';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule,TopBarComponent, TableComponent,
    FormsModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  toBarTitle:string= 'Dashboard';

  items: any[] = SALES;
  filteredItems: any[] = [];

  activeButton: string = 'All'; 
  activeFileButton: string = 'AllFile';
  activeOtherButton: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.filteredItems = [...this.items];
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


  setActive(buttonName: string) {
    this.activeButton = buttonName;
    this.filterItems();
  }

  // filterItems() {
  //   if (this.activeButton === '') {
  //     // If no button is active, show all items
  //     this.filteredItems = [...this.items];
  //   } else {
  //     // Filter items based on the active button value
  //     this.filteredItems = this.items.filter(item => item.status === this.activeButton);
  //   }
  // }
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
