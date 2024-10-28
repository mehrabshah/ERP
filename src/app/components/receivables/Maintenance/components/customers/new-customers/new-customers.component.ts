import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBarComponent } from '../../../../../../shared/top-bar/top-bar.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiSelectFieldComponent } from '../../../../../../shared/multi-select-field/multi-select-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-customers',
  standalone: true,
  imports: [CommonModule, TopBarComponent, NgbAccordionModule ,MultiSelectFieldComponent, ReactiveFormsModule],
  templateUrl: './new-customers.component.html',
  styleUrl: './new-customers.component.css'
})
export class NewCustomersComponent {
  toBarTitle: string = 'Customers';
  showtopNav: boolean = true;

  selectedData: any = {};
  isCollapsed = false;
  isCollapsed1= false;
  isCollapsed2= false;
  isCollapsed3= false;
  isCollapsed4= false;
  isCollapsed5= false;
  isCollapsed6= false;
  isCollapsed7= false;
  isCollapsed8= false;
  isCollapsed9= false;


  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Customers',
      icon: 'fa fa-xmark',
      link: '/receivable/maintenance/customers/newCustomers',
    },
    {
      id: '3',
      name: 'Sales Invoice',
      icon: 'fa fa-xmark',
    },
    {
      id: '4',
      name: 'Sales Return',
      icon: 'fa fa-xmark',
    }
  ];

  statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'InActive', value: 'inActive' },
  ];

  paymentTypeList =  [
    { label: 'Payment Type', value: 'paymentType' },
    { label: 'Payment Type 1', value: 'paymenyType1' },
  ];

  regionList = [
    { label: 'Region', value: 'region' },
    { label: 'Region 1', value: 'region1' },
  ];

  accountNoList = [
    { label: '0993939333', value: '0993939333' },
    { label: '0993939322', value: '0993939322' },
  ];

  priceCatList = [
    { label: 'Category', value: 'Category' },
    { label: 'Category 1', value: 'Category1' },
  ];

  asOfDateList = [
    { label: '02/03/2024', value: '02/03/2024' },
    { label: '12/03/2024', value: '12/03/2024' },
  ];

  address1List = [
    { label: 'adress1 street 25', value: 'adress1 street 25' },
    { label: 'adress1 street 29', value: 'adress1 street 25' },
  ];

  address2List = [
    { label: 'adress2 street 43', value: 'adress2 street 43' },
    { label: 'adress2 street 44', value: 'adress2 street 44' },
  ];

  cityList = [
    { label: 'City 1', value: 'City 1' },
    { label: 'City 2', value: 'City 2' },
  ];

  countryList = [
    { label: 'Country 1', value: 'Country 1' },
    { label: 'Country 2', value: 'Country 2' },
  ];

  taxAmountList = [
    { label: 'Tax Amount 1', value: 'Tax Amount 1' },
    { label: 'Tax Amount 2', value: 'Tax Amount 2' },
  ];

  taxStatusList = [
    { label: 'Exempt', value: 'Exempt' },
    { label: 'Non Exempt', value: 'Non Exempt' },
  ];

  paymentMethodList = [
    { label: 'payment Method', value: 'payment Method' },
    { label: 'payment Method  1', value: 'payment Method 1' },
  ];

  creditTermList = [
    { label: 'credit Term', value: 'credit Term' },
    { label: 'credit Term  1', value: 'credit Term 1' },
  ];

  bankAccountList = [
    { label: 'bank Account', value: 'bank Account' },
    { label: 'bank Account  1', value: 'bank Account 1' },
  ];
  
  tableData= [
    {
      branchName: 'Gulberg',
      branchCode: '1020',
      chequeNumber: '121212121233',
      accountNumber: '1299999383838383'
    }
  ]
  newCustomerForm!: FormGroup;
  constructor() { }
  ngOnInit() {
    this.newCustomerForm = new FormGroup({
      status: new FormControl(''),
      customerId: new FormControl(''),
      companyName: new FormControl(''),
      CNICNo: new FormControl(''),
      paymentType: new FormControl(''),
      accountNo: new FormControl(''),
      region: new FormControl(''),
      priceCategory: new FormControl(''),
      openingBalance: new FormControl(''),
      asOfDate: new FormControl(''),
      currentBalance: new FormControl(''),
      creditLimit: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      country:  new FormControl(''),
      contactName:  new FormControl(''),
      phone1:  new FormControl(''),
      phone2:  new FormControl(''),
      fax:  new FormControl(''),
      email:  new FormControl(''),
      taxAmount:  new FormControl(''),
      NTNNo:  new FormControl(''),
      exemptionNo:  new FormControl(''),
      salesTaxRegNo:  new FormControl(''),
      taxStatus:  new FormControl(''),
      paymentMethod:  new FormControl(''),
      creditTerm:  new FormControl(''),
      bankAccount:  new FormControl(''),
      termDays:  new FormControl(''),
      salesReps:  new FormControl(''),
      notifications:  new FormControl(''),
      branchName:  new FormControl(''),
      branchCode:  new FormControl(''),
      chequeNumber:  new FormControl(''),
      accountNumber:  new FormControl(''),
      comment:  new FormControl(''),
    });
  }



  updateSelectedItems(event: { label: string, selectedItems: any[] }) {
    if (event.selectedItems.length > 0) {
      this.selectedData[event.label] = event.selectedItems;
    } else {
      delete this.selectedData[event.label];
    }
  }

  selectedItems() {
    Object.keys(this.newCustomerForm.controls).forEach((label) => {
        const selectedItems = this.newCustomerForm.get(label)?.value;
        const data= {
          label: label,
          selectedItems: selectedItems
        }
        this.updateSelectedItems(data);
    });
  }

  customerSave(){
    this.selectedItems();
    console.log('Customer selected data:', this.selectedData);
  }
}
