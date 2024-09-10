import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() toBarTitle: string = '';
  @Input() showtopNav: boolean = false;

  @Output() toggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  toggleSidebar: any = false;
  screenWidth: number | undefined;
  showTitle: boolean = false;

  isDropdownVisible: boolean = false;
  isDropdownLangVisible: boolean = false;
  userName: string = "Rick";

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

  constructor(private sharedService: SharedServiceService,
    private router: Router) { }

ngOnInit(): void {
    this.toggleSidebarFun();
    this.screenWidth = window.innerWidth;
    this.checkScreenSize();
    if (this.screenWidth < 768) {
      this.showTitle = false;
      this.toggleSidebar = true;
    }
  }
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  toggleLangDropdown() {
    this.isDropdownLangVisible = !this.isDropdownLangVisible;
  }
  logout() {
    // localStorage.removeItem(this.user);
    // this.router.navigate(['/login']);
  }
  toggle() {
    this.menuStatus = !this.menuStatus;
    this.toggled.emit(this.menuStatus);
  }
  toggleSidebarFun() {
    this.sharedService.getSidebarOpened().subscribe((res: any) => {
      this.toggleSidebar = res;
    })
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.checkScreenSize();
  }
  private checkScreenSize() {
    this.showTitle = window.innerWidth > 786;
  }
  updateProfile() {

  }

  resetPassword() {

  }




}
