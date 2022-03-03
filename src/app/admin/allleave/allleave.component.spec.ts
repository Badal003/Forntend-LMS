import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllleaveComponent } from './allleave.component';

describe('AllleaveComponent', () => {
  let component: AllleaveComponent;
  let fixture: ComponentFixture<AllleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
