import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private sibarOpened = new Subject<any>();
  private isTopBarTitle = new Subject<any>();

  constructor() { }

  setSidebarOpened(obj: any) {
    this.sibarOpened.next(obj);
  }
  getSidebarOpened(): Observable<any> {
    return this.sibarOpened.asObservable();
  }

  setTopBarTitle(msg:any){
    this.isTopBarTitle.next(msg);
  }
  getTopBarTitle(){
    return this.isTopBarTitle.asObservable();
  }
}
