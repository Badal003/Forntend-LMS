import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageleavetypeComponent } from './manageleavetype.component';

describe('ManageleavetypeComponent', () => {
  let component: ManageleavetypeComponent;
  let fixture: ComponentFixture<ManageleavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageleavetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageleavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
