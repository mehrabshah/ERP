import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { of } from 'rxjs';

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
  showTitle: boolean = false;

  isDropdownVisible: boolean = false;
  isDropdownLangVisible: boolean = false;
  userName: string = "Rick";
  isTopBarTitle: any = "Dashboard";
  constructor(private sharedService: SharedServiceService,private cdr: ChangeDetectorRef,
    private router: Router) { }

    setTopBarTitle() {
      this.sharedService.getTopBarTitle().subscribe((res: any) => {
        if (res) {
          console.log("res****",res)
          console.log("res****",res.title)
          this.isTopBarTitle = res.title;
          this.cdr.detectChanges();
          console.log("this.isTopBarTitle",this.isTopBarTitle)
        }
      }, (error: any) => {
      });

      return of(this.isTopBarTitle); 
    }

  ngOnInit(): void {
    this.setTopBarTitle();
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
