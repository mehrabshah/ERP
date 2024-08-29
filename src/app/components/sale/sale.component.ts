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

  activeButton: string = 'All'; 
  activeFileButton: string = 'AllFile';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
 
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
  }

  setActiveFile(buttonName: string) {
    this.activeFileButton = buttonName;
  }

  createSaleOrder(){
    this.router.navigate(['/sales/transaction/arReceipt']);
  }
}
