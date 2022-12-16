import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDailyLogComponent } from './employee-daily-log.component';

describe('EmployeeDailyLogComponent', () => {
  let component: EmployeeDailyLogComponent;
  let fixture: ComponentFixture<EmployeeDailyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDailyLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDailyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
