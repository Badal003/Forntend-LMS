import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemainComponent } from './employeemain.component';

describe('EmployeemainComponent', () => {
  let component: EmployeemainComponent;
  let fixture: ComponentFixture<EmployeemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
