import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  @Input() summaryData: any ;
  
  isEditing: boolean = false;

  constructor() { }
  ngOnInit(): void {
 
  }

  toggleEdit() {
    this.isEditing = !this.isEditing; 
  }

}
