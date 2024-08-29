import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() sideNavStatus: boolean = false;
  @Input() moduleType: any = '';

  userName: string = 'LOGO';
  sideBarList: any = [
    {
      id: '1',
      name: 'Sales',
      icon: 'assets/images/sidebar/sale.svg',
      link: '/sales',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: 'Transaction',
          isChildOpen: false,
          children: [
            {
              name: 'AR Receipts',
              subLink: '/sales/transaction/arReceipt'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Inventory',
      icon: 'assets/images/sidebar/inventory.svg',
      link: '/inventory',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Accounts',
      icon: 'assets/images/sidebar/accounts.svg',
      link: '/accounts',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'Purchases',
      icon: 'assets/images/sidebar/purchase.svg',
      link: '/purchases',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '5',
      name: 'Receivables',
      icon: 'assets/images/sidebar/receivalble.svg',
      link: '/receivable',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '6',
      name: "Payables",
      icon: "assets/images/sidebar/payable.svg",
      link: '/payables',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '7',
      name: "Human Resources",
      icon: "assets/images/sidebar/humanResource.svg",
      link: '/humanResource',
      height: '25px',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '8',
      name: "Assets",
      icon: "assets/images/sidebar/assets.svg",
      link: '/assets',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '9',
      name: "Administration",
      icon: "assets/images/sidebar/admin.svg",
      link: '/administration',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '10',
      name: "Production",
      icon: "assets/images/sidebar/production.svg",
      link: '/production',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '11',
      name: "Cash & Bank",
      icon: "assets/images/sidebar/cashAndBank.svg",
      link: '/cashAndBank',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '12',
      name: "Store Inventory",
      icon: "assets/images/sidebar/storeInventory.svg",
      link: '/storeInventory',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    },
    {
      id: '13',
      name: "Quality Control",
      icon: "assets/images/sidebar/qualityControl.svg",
      link: '/qualityControl',
      height: '',
      isMainOpen: false,
      child: [
        {
          name: '',
          isChildOpen: false,
          children: [
            // {
            //   name: 'AR Receipts',
            //   subLink: '/sales/transaction/arReceipt'
            // }
          ]
        }
      ]
    }

  ];

  list: any = [];

  toggleSidebar: any = false;

  screenWidth: number | undefined;

  isAvatarUpdate: any;

  constructor(private router: Router, private sharedService: SharedServiceService) { }
  ngOnInit(): void {
    this.list = this.sideBarList;
    this.toggleSidebarFun();
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.toggleSidebar = true;
    }
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }
  
  toggleDropdown(item: any) {
    item.isMainOpen = !item.isMainOpen; 
  }

  toggleChildDropdown(item: any) {
    item.isChildOpen = !item.isChildOpen; 
  }

  toggleSidebarFun() {
    this.sharedService.getSidebarOpened().subscribe((res: any) => {
      this.toggleSidebar = res;
    })
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

}
