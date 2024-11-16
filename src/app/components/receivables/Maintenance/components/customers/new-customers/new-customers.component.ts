import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { TopBarComponent } from '../../../../../../shared/top-bar/top-bar.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiSelectFieldComponent } from '../../../../../../shared/multi-select-field/multi-select-field.component';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-customers',
  standalone: true,
  imports: [CommonModule, TopBarComponent, NgbAccordionModule ,MultiSelectFieldComponent, ReactiveFormsModule,
    FormsModule,NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective,NgSelectModule,JsonPipe
  ],
  templateUrl: './new-customers.component.html',
  styleUrl: './new-customers.component.css'
})
export class NewCustomersComponent {
  toBarTitle: string = 'Customers';
  showtopNav: boolean = true;
  statusId: number = 0;
  paymentTypeId : number = 0;
  regionId : number = 0;
  accountNoId : number = 0;
  priceCategoryId: number = 0;
  asOfDateId : number = 0;
  address1Id : number = 0;
  address2Id : number = 0;
  countryId : number = 0;
  taxAmountId : number = 0;
  taxStatusId : number = 0;
  paymentMethodId : number = 0;
  creditTermId: number = 0;
  cityId : number = 0;





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
    { id: 1, name: 'Active' },
    { id: 2, name: 'InActive' },
  ];

  paymentTypeList =  [
    { id: 1, name: 'Payment Type' },
    { id: 2, name: 'Payment Type 1'},

  ];

  regionList = [
    { id: 1, name: 'Region' },
    { id: 2, name: 'Region 1'},

  ];

  accountNoList = [
    { id: 1, name: '0993939333'},
    { id: 2, name: '0993939322'},
  ];



  priceCatList = [
    { id: 1, name: 'Category'},
    { id: 2, name: 'Category 1'},
  ];


  asOfDateList = [
    { id: 1, name: '02/03/2024'},
    { id: 2, name: '12/03/2024'},
  ];



  address1List = [
    { id: 1, name: 'adress1 street 25'},
    { id: 2, name: 'adress1 street 29'},
  ];




  address2List = [
    { id: 1, name: 'adress2 street 43'},
    { id: 2, name: 'adress2 street 44'},
  ];


  cityList = [
    { id: 1, name: 'City 1'},
    { id: 2, name: 'City 2'},
  ];


  countryList = [
    { id: 1, name: 'Country 1'},
    { id: 2, name: 'Country 2'},
  ];


  taxAmountList = [
    { id: 1, name: 'Tax Amount 1'},
    { id: 2, name: 'Tax Amount 2'},
  ];



  taxStatusList = [
    { id: 1, name: 'Exempt'},
    { id: 2, name: 'Non Exempt'},
  ];


  paymentMethodList = [
    { id: 1, name: 'payment Method'},
    { id: 2, name: 'payment Method  1'},
  ];

  creditTermList = [
    { id: 1, name: 'credit Term'},
    { id: 2, name: 'credit Term  1'},
  ];

  bankAccountList = [
    { id: 1, name: 'bank Account'},
    { id: 2, name: 'bank Account  1'},
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
      status: new FormControl(null),
      customerId: new FormControl(''),
      companyName: new FormControl(''),
      CNICNo: new FormControl(''),
      paymentType: new FormControl(null),
      accountNo: new FormControl(null),
      region: new FormControl(null),
      priceCategory: new FormControl(null),
      openingBalance: new FormControl(''),
      asOfDate: new FormControl(null),
      currentBalance: new FormControl(''),
      creditLimit: new FormControl(''),
      address1: new FormControl(null),
      address2: new FormControl(null),
      city: new FormControl(null),
      country:  new FormControl(null),
      contactName:  new FormControl(''),
      phone1:  new FormControl(''),
      phone2:  new FormControl(''),
      fax:  new FormControl(''),
      email:  new FormControl(''),
      taxAmount:  new FormControl(null),
      NTNNo:  new FormControl(''),
      exemptionNo:  new FormControl(''),
      salesTaxRegNo:  new FormControl(''),
      taxStatus:  new FormControl(null),
      paymentMethod:  new FormControl(null),
      creditTerm:  new FormControl(null),
      bankAccount:  new FormControl(null),
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

  onStatusSelected(event: any) {
    let id = event.id;
    if (id) {
      this.statusId = id;
    }
  }


  onPaymentTypeSelected(event: any) {
    let id = event.id;
    if (id) {
      this.paymentTypeId = id;
    }
  }

  onRegionSelected(event: any) {
    let id = event.id;
    if (id) {
      this.regionId = id;
    }
  }

  onAccountNoSelected(event: any) {
    let id = event.id;
    if (id) {
      this.accountNoId = id;
    }
  }


  onPriceCategorySelected(event: any) {
    let id = event.id;
    if (id) {
      this.priceCategoryId = id;
    }
  }

  
  onAsOfDateSelected(event: any) {
    let id = event.id;
    if (id) {
      this.asOfDateId = id;
    }
  }


  onAddress1Selected(event: any) {
    let id = event.id;
    if (id) {
      this.address1Id = id;
    }
  }


  onAddress2Selected(event: any) {
    let id = event.id;
    if (id) {
      this.address2Id = id;
    }
  }


  onCitySelected(event: any) {
    let id = event.id;
    if (id) {
      this.cityId = id;
    }
  }



  onCountrySelected(event: any) {
    let id = event.id;
    if (id) {
      this.countryId = id;
    }
  }

  onTaxAmountSelected(event: any) {
    let id = event.id;
    if (id) {
      this.taxAmountId = id;
    }
  }

  onTaxStatusSelected(event: any) {
    let id = event.id;
    if (id) {
      this.taxStatusId = id;
    }
  }
  
  onPaymentMethodSelected(event: any) {
    let id = event.id;
    if (id) {
      this.paymentMethodId = id;
    }

  }

  onCreditTermSelected(event: any) {
    let id = event.id;
    if (id) {
      this.creditTermId = id;
    }

  }


  onBankAccountSelected(event: any) {
    let id = event.id;
    if (id) {
      this.creditTermId = id;
    }

  }






  customerSave(){
    this.selectedItems();
    console.log('Customer selected data:', this.selectedData);
  }

  


}
