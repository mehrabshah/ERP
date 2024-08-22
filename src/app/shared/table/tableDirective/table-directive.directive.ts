import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Sales } from '../staticFiles/sale';

export type SortColumn = keyof Sales | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  // selector: '[appTableDirective]',
  selector: 'th[sortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class TableDirectiveDirective {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  constructor() { }
  rotate() {
    // this.direction = rotate[this.direction];
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }

}
