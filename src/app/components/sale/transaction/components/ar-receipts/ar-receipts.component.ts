import { Component } from '@angular/core';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ar-receipts',
  standalone: true,
  imports: [CommonModule, TopBarComponent, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective,
    FormsModule, ReactiveFormsModule, NgSelectModule
  ],
  templateUrl: './ar-receipts.component.html',
  styleUrl: './ar-receipts.component.css'
})
export class ArReceiptsComponent {
  toBarTitle:string= 'Sales Orders';
  showtopNav:boolean= true;
  
  generalForm!: FormGroup;
  customerId: number = 0;
  statusId: number = 0;
  shipAdressId: number = 0;
  billAddressId: number = 0;
  descriptionId: number = 0;
  customersData = [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];
  statusData = [
    { id: 1, name: 'New' },
    { id: 2, name: 'Dispatch' },
    { id: 3, name: 'Cancel' },
    { id: 4, name: 'Confirm' },
  ];
  shipAddressData = [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];
  billAddressData = [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];
  descriptionData = [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];
  summaryData = [
    {
      title: 'Broiler Breeder Grower',
      subTitle: 'Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower',
      subTitle: 'Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower',
      subTitle: 'Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower',
      subTitle: 'Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    }
  ]
  constructor() { }
  ngOnInit(): void {
    this.generalForm = new FormGroup({
      customer: new FormControl(null),
      status: new FormControl(null),
      refNo: new FormControl(null),
      soDate: new FormControl(null),
      cancelDate: new FormControl(null),
      shipToAddress: new FormControl(null),
      billToAddress: new FormControl(null),
      phNo: new FormControl(null),
      saleRep: new FormControl(null),
      itemID: new FormControl(null),
      description: new FormControl(null),
      orderQty: new FormControl(null),
      price: new FormControl(null),
      extPrice: new FormControl(null),
    });
  }

  onCustomerSelected(event: any) {
    let id = event.id;
    if (id) {
      this.customerId = id;
    }
  }

  onStatusSelected(event: any) {
    let id = event.id;
    if (id) {
      this.statusId = id;
    }
  }

  onShipAddressSelected(event: any) {
    let id = event.id;
    if (id) {
      this.shipAdressId = id;
    }
  }

  onBillAddressSelected(event: any) {
    let id = event.id;
    if (id) {
      this.billAddressId = id;
    }
  }

  onDescriptionSelected(event: any) {
    let id = event.id;
    if (id) {
      this.descriptionId = id;
    }
  }

}
