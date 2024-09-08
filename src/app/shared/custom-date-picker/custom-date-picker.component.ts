import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-date-picker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-date-picker.component.html',
  styleUrl: './custom-date-picker.component.css'
})
export class CustomDatePickerComponent {

  selectedDate = new FormControl(new Date());
  isOpen = false;
  days: number[] = [];

  constructor() {
    this.generateCalendar(new Date());
  }

  togglePanel(): void {
    this.isOpen = !this.isOpen;
  }

  onDateSelect(date: number): void {
    const current = this.selectedDate.value as Date;
    const newDate = new Date(current.getFullYear(), current.getMonth(), date);
    this.selectedDate.setValue(newDate);
    this.isOpen = false;
  }

  generateCalendar(date: Date): void {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    this.days = Array(firstDay).fill(null).concat([...Array(daysInMonth).keys()].map(i => i + 1));
  }

  onMonthChange(monthChange: number): void {
    const current = this.selectedDate.value as Date;
    const newDate = new Date(current.getFullYear(), current.getMonth() + monthChange, 1);
    this.generateCalendar(newDate);
    this.selectedDate.setValue(newDate);
  }

}
