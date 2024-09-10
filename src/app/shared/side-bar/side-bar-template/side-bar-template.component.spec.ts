import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarTemplateComponent } from './side-bar-template.component';

describe('SideBarTemplateComponent', () => {
  let component: SideBarTemplateComponent;
  let fixture: ComponentFixture<SideBarTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
