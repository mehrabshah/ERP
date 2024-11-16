import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-summary-sales-return',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order-summary-sales-return.component.html',
  styleUrl: './order-summary-sales-return.component.css',
})
export class OrderSummarySalesReturnComponent {
  @Input() summaryData: any;

  isEditing: boolean = false;
  openIndex: number | null = null;

  toggleDetails(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }

  constructor() {}
  ngOnInit(): void {}

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  validateInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);

    // Prevent entering non-numeric characters
    if (!/[0-9]/.test(inputChar)) {
      event.preventDefault();
    }
  }
}
