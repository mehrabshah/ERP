import { Component, HostListener, inject, TemplateRef } from '@angular/core';
import { CommonModule, JsonPipe  } from '@angular/common';
import { TopBarComponent } from '../../../../../../shared/top-bar/top-bar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {OrderSummarySalesReturnComponent} from "../sales-return-new/order-summary-sales-return/order-summary-sales-return.component"


@Component({
  selector: 'app-sales-return-new',
  standalone: true,
  imports: [TopBarComponent,CommonModule,FormsModule, ReactiveFormsModule,NgbAccordionModule,NgSelectComponent, NgSelectModule, NgOptionTemplateDirective, NgLabelTemplateDirective,
    NgbNavModule, BsDatepickerModule,NgbDatepickerModule,OrderSummarySalesReturnComponent,JsonPipe,NgbAlertModule
  ],
  templateUrl: './sales-return-new.component.html',
  styleUrl: './sales-return-new.component.css'
})

export class SalesReturnNewComponent {
  toBarTitle: string = 'Sales Return';
  showtopNav: boolean = true;
  salesReturnForm!:FormGroup;
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  statusId: number = 0;
  salesInvoiceId: number = 0
  screenWidth!: number;




  topBarList: any = [
    {
      id: '1',
      name: 'Ar Receipt',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/arReceipt',
    },
    {
      id: '2',
      name: 'Sales Return',
      icon: 'fa fa-xmark',
      link: '/sales/transaction/salesReturnNew',
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
    },
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



  statusData  =  [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];


  saleInvoicesData =  [
    { id: 1, name: 'Abbas Ali Traders Chak # 117 DB,Yazman' },
    { id: 2, name: 'Ahmed Ali Traders Chak # 119 BD,Yazmad' },
    { id: 3, name: 'Asgar Traders Chak # 111 DB,Yazman' },
    { id: 4, name: 'Mubeen Ali Traders Chak # 117 DB,Yazman' },
  ];




  tableData= [
    {
      id:1,
      licenseNo: '124589',
      salesInvoiceNo : "124589",
      InvoiceLineNo : "124589",
      itemID : "124589",
      orderQty : "02",
      returnQty: "02",
      availableQty : "02",
      unitPrice :"10,000.00",
      netAmount : "10,000.00",
      Comments :"Good Product",
      Tax:"900"
    },
    {
      id:2,
      licenseNo: '124589',
      salesInvoiceNo : "124589",
      InvoiceLineNo : "124589",
      itemID : "124589",
      orderQty : "02",
      returnQty: "02",
      availableQty:"02",
      unitPrice :"10,000.00",
      netAmount : "10,000.00",
      Comments :"Good Product",
      Tax:"900"
    }
  ]

  onStatusSelected(event: any) {
    let id = event.id;
    if (id) {
      this.statusId = id;
    }
  }

  onSalesInvoiceSelected(event: any){
    let id = event.id;
    if (id) {
      this.salesInvoiceId = id;
    }
  }


  private offcanvasService = inject(NgbOffcanvas);
  returnDateModel!: NgbDateStruct;
  constructor() { }


  ngOnInit(): void {
    this.salesReturnForm = new FormGroup({
      customer: new FormControl(null),
      status:new FormControl(null),
      salesInvoice:new FormControl(null),
      returnDate: new FormControl(null),
      comment:new FormControl(null),
    });
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateScreenWidthVal();
  }
  

  private updateScreenWidthVal(): void {
    this.screenWidth = window.innerWidth;
  }


  showSummartList(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
