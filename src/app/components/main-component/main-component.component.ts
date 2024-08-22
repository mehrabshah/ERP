import { Component, HostListener } from '@angular/core';
import { SharedServiceService } from '../../shared/service/shared-service.service';
import { SideBarComponent } from '../../shared/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent,TopBarComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  sideNavStatus:boolean= false;
  screenWidth!: number;
  constructor(private sharedService:SharedServiceService){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<768){
      this.sideNavStatus=true;
      console.log("this.sideNavStatus",this.sideNavStatus)
    }
  }

  toggleSidebar(){
    this.sideNavStatus = !this.sideNavStatus;
    this.sharedService.setSidebarOpened(this.sideNavStatus);
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

}
