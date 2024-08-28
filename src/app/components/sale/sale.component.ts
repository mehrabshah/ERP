import { Component } from '@angular/core';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table/table.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SALES } from '../../shared/table/staticFiles/sales';
import { Sales } from '../../shared/table/staticFiles/sale';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../shared/service/shared-service.service';


@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule,TopBarComponent, TableComponent,
    FormsModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {
  items: any[] = SALES;

  activeButton: string = 'All'; 
  activeFileButton: string = 'AllFile';

  constructor(private router: Router, private sharedService: SharedServiceService) {
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
    console.log("clikc**************")
    this.sharedService.setTopBarTitle({ success: true, title: "Sales Orders" });
    this.router.navigate(['/sales/transaction/arReceipt']);
  }
}
