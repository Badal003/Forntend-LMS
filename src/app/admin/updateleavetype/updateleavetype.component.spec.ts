import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateleavetypeComponent } from './updateleavetype.component';

describe('UpdateleavetypeComponent', () => {
  let component: UpdateleavetypeComponent;
  let fixture: ComponentFixture<UpdateleavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateleavetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateleavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
