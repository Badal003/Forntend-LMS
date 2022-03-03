import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedesignationComponent } from './managedesignation.component';

describe('ManagedesignationComponent', () => {
  let component: ManagedesignationComponent;
  let fixture: ComponentFixture<ManagedesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
