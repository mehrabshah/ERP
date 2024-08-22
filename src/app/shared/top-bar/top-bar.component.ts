import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Output() toggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  toggleSidebar: any = false;
  screenWidth: number | undefined;


  isDropdownVisible: boolean = false;
  isDropdownLangVisible: boolean = false;
  userName: string = "Rick";
  constructor(private sharedService: SharedServiceService, 
    private router: Router) { }

  ngOnInit(): void {
    this.toggleSidebarFun();
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.toggleSidebar = true;
    }
  }
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  toggleLangDropdown(){
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
  }

  updateProfile(){

  }

  resetPassword(){
    
  }
}
