import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OciuiStatsComponent } from './ociui-stats.component';

describe('OciuiStatsComponent', () => {
  let component: OciuiStatsComponent;
  let fixture: ComponentFixture<OciuiStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OciuiStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OciuiStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
