import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllleavesComponent } from './allleaves.component';

describe('AllleavesComponent', () => {
  let component: AllleavesComponent;
  let fixture: ComponentFixture<AllleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
