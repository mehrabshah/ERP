import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../../../../../shared/top-bar/top-bar.component';


@Component({
  selector: 'app-sales-return-new',
  standalone: true,
  imports: [TopBarComponent,CommonModule,],
  templateUrl: './sales-return-new.component.html',
  styleUrl: './sales-return-new.component.css'
})
export class SalesReturnNewComponent {
  toBarTitle: string = 'Sales Return';
  showtopNav: boolean = true;

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

}
