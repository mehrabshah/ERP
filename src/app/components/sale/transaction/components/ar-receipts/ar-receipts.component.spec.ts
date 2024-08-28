import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArReceiptsComponent } from './ar-receipts.component';

describe('ArReceiptsComponent', () => {
  let component: ArReceiptsComponent;
  let fixture: ComponentFixture<ArReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArReceiptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
