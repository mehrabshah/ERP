import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  @Input() multiNetIncomeList: any;

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
  ngOnInit() {
    this.accountForm = new FormGroup({
      accountVal: new FormControl(null),
    });
    if (this.multiNetIncomeList.data) {
      this.dropdownList = this.multiNetIncomeList.data;
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  

}
