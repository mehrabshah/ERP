import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SharedServiceService } from '../../service/shared-service.service';

@Component({
  selector: 'app-side-bar-template',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './side-bar-template.component.html',
  styleUrl: './side-bar-template.component.css'
})
export class SideBarTemplateComponent {

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
        // {
        //   name: 'Transaction',
        //   isChildOpen: false,
        //   children: [
        //     {
        //       name: 'Dummy Text',
        //       subLink: '/accounts'
        //     }
        //   ]
        // },
        {
          name: 'Maintenance',
          isChildOpen: false,
          children: [
            {
              name: 'Account Setup',
              subLink: '/accounts/maintenance/accountSetup'
            },
            {
              name: 'Account Setting',
              subLink: '/accounts/maintenance/accountSetting'
            }
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
          name: 'Maintenance',
          isChildOpen: false,
          children: [
            {
              name: 'Customers',
              subLink: 'receivable/maintenance/customers'
            }
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

  constructor(private router: Router, private sharedService: SharedServiceService) { }
  ngOnInit(): void {
    this.list = this.sideBarList;
    this.router.events.subscribe(() => {
      this.closeOtherMenus();
    });
  }

  closeOtherMenus() {
    const currentUrl = this.router.url;
    this.sideBarList.forEach((menuItem: any) => {
      if (!currentUrl.startsWith(menuItem.link)) {
        menuItem.isMainOpen = false;  
        menuItem.child.forEach((child: any) => {
          child.isChildOpen = false; 
        });
      } else {
        menuItem.isMainOpen = true;
      }
    });
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  toggleDropdown(item: any) {
    this.sideBarList.forEach((menuItem: any) => {
      if (menuItem !== item) {
        menuItem.isMainOpen = false;
        menuItem.child.forEach((child: any) => {
          child.isChildOpen = false;
        });
      }
    });
    item.isMainOpen = !item.isMainOpen;
  }


  toggleChildDropdown(parentItem: any, item: any) {
    if (parentItem.isMainOpen) {
      parentItem.child.forEach((child: any) => {
        if (child !== item) {
          child.isChildOpen = false;
        }
      });
      item.isChildOpen = !item.isChildOpen;
    }
  }

}
