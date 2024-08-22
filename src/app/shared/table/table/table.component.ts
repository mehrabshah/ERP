import { Component, QueryList, ViewChildren } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { TableServicesService } from '../tableService/table-services.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SortColumn, SortDirection, SortEvent, TableDirectiveDirective } from '../tableDirective/table-directive.directive';
import { Sales } from '../staticFiles/sale';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DecimalPipe, CommonModule ,FormsModule, AsyncPipe, NgbHighlight, TableDirectiveDirective, 
    NgbPaginationModule, FontAwesomeModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [TableServicesService, DecimalPipe],
})
export class TableComponent {
  sales$: Observable<Sales[]>;
  total$: Observable<number>;
  sortColumn: SortColumn = '';
  sortDirection: SortDirection = '';

  activeButton: string = 'All'; 
  activeFileButton: string = '';
 
  @ViewChildren(TableDirectiveDirective) headers!: QueryList<TableDirectiveDirective>;

  constructor(public service: TableServicesService) {
    this.sales$ = service.sales$;
    this.total$ = service.total$;
  }

  onSort(event: any) {
    const { column, direction }: SortEvent = event;
    this.headers.forEach((header: any) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.sortColumn = column;
    this.sortDirection = direction;

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  setActive(buttonName: string) {
    this.activeButton = buttonName;
  }

  setActiveFile(buttonName: string) {
    this.activeFileButton = buttonName;
  }
}
