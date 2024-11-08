import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnNewComponent } from './sales-return-new.component';

describe('SalesReturnNewComponent', () => {
  let component: SalesReturnNewComponent;
  let fixture: ComponentFixture<SalesReturnNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesReturnNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReturnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
