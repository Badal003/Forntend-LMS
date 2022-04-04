import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingleaveComponent } from './pendingleave.component';

describe('PendingleaveComponent', () => {
  let component: PendingleaveComponent;
  let fixture: ComponentFixture<PendingleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
