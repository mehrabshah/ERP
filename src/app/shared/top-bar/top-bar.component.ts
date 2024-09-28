import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  @Input() listNav: any = [];

  @Output() toggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  toggleSidebar: any = false;
  screenWidth: number | undefined;
  showTitle: boolean = false;

  isDropdownVisible: boolean = false;
  isDropdownLangVisible: boolean = false;
  userName: string = "Rick";

  topBarList: any = [];

  isExpanded:boolean = false;
  isLargeScreen:boolean = false;
  showMenu:boolean = true;

  constructor(private sharedService: SharedServiceService, private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.topBarList = this.listNav;
    this.checkScreenSize();
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
    const previousSize = this.isLargeScreen;
    this.isLargeScreen = window.innerWidth > 620;
    if (previousSize !== this.isLargeScreen ) {
      this.cdr.detectChanges();
    }
  }
  toggleSearch() {
    this.isExpanded = !this.isExpanded;
    this.showMenu = !this.showMenu;
  }
  updateProfile() {

  }

  resetPassword() {

  }




}
