import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddesignationComponent } from './adddesignation.component';

describe('AdddesignationComponent', () => {
  let component: AdddesignationComponent;
  let fixture: ComponentFixture<AdddesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
