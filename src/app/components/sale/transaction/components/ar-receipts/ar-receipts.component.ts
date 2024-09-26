import { Component, HostListener, inject, TemplateRef } from '@angular/core';
import { TopBarComponent } from '../../../../../shared/top-bar/top-bar.component';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@Component({
  selector: 'app-ar-receipts',
  standalone: true,
  imports: [CommonModule, TopBarComponent, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective,
    FormsModule, ReactiveFormsModule, NgSelectModule,NgbNavModule, BsDatepickerModule,
    OrderSummaryComponent,NgbDatepickerModule, NgbAlertModule, JsonPipe
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
  active = 1;
  screenWidth!: number;

  customersData = [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];
  statusData = [
    { id: 1, name: 'New' },
    { id: 2, name: 'Confirmed' },
    { id: 3, name: 'Void' },
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
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },

    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
 

    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
    {
      title: 'Broiler Breeder Grower Crumbs',
      netPrice: '3864',
      quantity: '200',
      taxAmount: "19.32",
      price: '3000'
    },
 


  ]

  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Delivery Challan',
      icon: 'fa fa-xmark',
      // link: '/sales/transaction/arReceipt',
    },
    {
      id: '3',
      name: 'Sales Invoice',
      icon: 'fa fa-xmark',
      // link: '/sales/transaction/arReceipt',
    },
    {
      id: '4',
      name: 'Sales Return',
      icon: 'fa fa-xmark',
      // link: '/sales/transaction/arReceipt',
    }
  ]

  private offcanvasService = inject(NgbOffcanvas);
  soDateModel!: NgbDateStruct;
  cancelDateModel!: NgbDateStruct;
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
      comment: new FormControl(null),
      price: new FormControl(null),
      extPrice: new FormControl(null),
      customerInstruction: new FormControl('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nihil, quam perspiciatis nostrum, aliquid dolorum culpa eligendi ratione ducimus possimus in deserunt debitis earum, vitae soluta at accusamus sequi odio.'),
      item: new FormControl('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nihil, quam perspiciatis nostrum, aliquid dolorum culpa eligendi ratione ducimus possimus in deserunt debitis earum, vitae soluta at accusamus sequi odio.'),
      officeInstruction: new FormControl('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nihil, quam perspiciatis nostrum, aliquid dolorum culpa eligendi ratione ducimus possimus in deserunt debitis earum, vitae soluta at accusamus sequi odio.'),
   
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateScreenWidthVal();
  }

  private updateScreenWidthVal(): void {
    this.screenWidth = window.innerWidth;
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

  showSummartList(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
