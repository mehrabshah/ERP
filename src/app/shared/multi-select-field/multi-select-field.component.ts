import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule, IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-multi-select-field',
  standalone: true,
  imports: [CommonModule, NgMultiSelectDropDownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './multi-select-field.component.html',
  styleUrl: './multi-select-field.component.css'
})
export class MultiSelectFieldComponent {
  @Input() multiList: any;
  @Output() selectedItemsChange = new EventEmitter<{ label: string, selectedItems: any[] }>(); 

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true,
  };
  dropdownList: any = [];
  selectedItems: any = [];

  accountForm!: FormGroup;
  constructor() { }
  ngOnInit() {
    this.accountForm = new FormGroup({
      accountVal: new FormControl([]),
    });
    if (this.multiList.data) {
      this.dropdownList = this.multiList.data;
    }
  }
  onItemSelect(item: any) {
    this.emitSelectedItems();
  }

  onItemDeselect(item: any) {
    this.emitSelectedItems();
  }

  onSelectAll(items: any) {
    this.accountForm.get('accountVal')?.setValue(items);
    this.emitSelectedItems();
  }

  onDeselectAll(items: any) {
    this.accountForm.get('accountVal')?.setValue([]);
    this.emitSelectedItems();
  }


  emitSelectedItems() {
    const selectedItems = this.accountForm.get('accountVal')?.value || [];
    this.selectedItemsChange.emit({
      label: this.multiList.label,
      selectedItems: selectedItems || []
    });
  }

}
