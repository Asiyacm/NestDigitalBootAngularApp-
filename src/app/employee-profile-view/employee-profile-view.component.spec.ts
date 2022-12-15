import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileViewComponent } from './employee-profile-view.component';

describe('EmployeeProfileViewComponent', () => {
  let component: EmployeeProfileViewComponent;
  let fixture: ComponentFixture<EmployeeProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
