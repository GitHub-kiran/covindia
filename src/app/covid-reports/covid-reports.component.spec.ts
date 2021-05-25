import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReportsComponent } from './covid-reports.component';

describe('CovidReportsComponent', () => {
  let component: CovidReportsComponent;
  let fixture: ComponentFixture<CovidReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
