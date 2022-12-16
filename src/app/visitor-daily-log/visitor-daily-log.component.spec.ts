import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDailyLogComponent } from './visitor-daily-log.component';

describe('VisitorDailyLogComponent', () => {
  let component: VisitorDailyLogComponent;
  let fixture: ComponentFixture<VisitorDailyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorDailyLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorDailyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
