import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleavetypeComponent } from './addleavetype.component';

describe('AddleavetypeComponent', () => {
  let component: AddleavetypeComponent;
  let fixture: ComponentFixture<AddleavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddleavetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
