import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNavigationComponent } from './employee-navigation.component';

describe('EmployeeNavigationComponent', () => {
  let component: EmployeeNavigationComponent;
  let fixture: ComponentFixture<EmployeeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
