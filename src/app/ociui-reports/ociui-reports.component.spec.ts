import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OciuiReportsComponent } from './ociui-reports.component';

describe('OciuiReportsComponent', () => {
  let component: OciuiReportsComponent;
  let fixture: ComponentFixture<OciuiReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OciuiReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OciuiReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
