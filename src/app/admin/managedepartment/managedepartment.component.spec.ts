import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedepartmentComponent } from './managedepartment.component';

describe('ManagedepartmentComponent', () => {
  let component: ManagedepartmentComponent;
  let fixture: ComponentFixture<ManagedepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
