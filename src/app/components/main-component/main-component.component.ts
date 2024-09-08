import { Component, HostListener } from '@angular/core';
import { SharedServiceService } from '../../shared/service/shared-service.service';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SideBarComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  sideNavStatus:boolean= false;
  showSideNavBtn: boolean = false;
  screenWidth!: number;
  constructor(private sharedService:SharedServiceService){}

  ngOnInit(): void {
    this.updateSidebarStatus();
  }
  
  toggleSidebar() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sharedService.setSidebarOpened(this.sideNavStatus);
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateSidebarStatus();
  }
  
  private updateSidebarStatus(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 1200) {
      this.sideNavStatus = true; 
      this.showSideNavBtn = true;
    } else {
      this.sideNavStatus = false;
      this.showSideNavBtn = false;
    }
    this.sharedService.setSidebarOpened(this.sideNavStatus);
  }

}
