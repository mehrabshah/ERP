import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-setup-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-setup-button.component.html',
  styleUrl: './account-setup-button.component.css'
})
export class AccountSetupButtonComponent {
  @Input() activeParentBtn!: string;
  @Output() buttonClicked = new EventEmitter<string>();
  activeButton: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.activeButton = this.activeParentBtn;
  }



  onButtonClick(button: string) {
    this.buttonClicked.emit(button); 
    this.activeButton = button;
  }
}
