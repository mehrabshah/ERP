import { Component, HostListener, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { CommonModule } from '@angular/common';
import {NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SideBarTemplateComponent } from './side-bar-template/side-bar-template.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule, SideBarTemplateComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() sideNavStatus: boolean = false;
  @Input() moduleType: any = '';

  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  userName: string = 'LOGO';

  toggleSidebar: any = false;

  screenWidth: number | undefined;

  isAvatarUpdate: any;
  
  private offcanvasService = inject(NgbOffcanvas);
  constructor(private router: Router, private sharedService: SharedServiceService) { }
  ngOnInit(): void {
    this.toggleSidebarFun();
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.toggleSidebar = true;
    }
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
  
	openSideBar() {
    this.offcanvasService.open(this.contentTemplate, { ariaLabelledBy: 'offcanvas-basic-title' });
	}
}
