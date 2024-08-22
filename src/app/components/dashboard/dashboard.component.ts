import { Component } from '@angular/core';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table/table.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SALES } from '../../shared/table/staticFiles/sales';
import { Sales } from '../../shared/table/staticFiles/sale';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,TopBarComponent, TableComponent,
    FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  items: any[] = SALES;

  activeButton: string = 'All'; 
  activeFileButton: string = 'AllFile';

  constructor() {
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
}
