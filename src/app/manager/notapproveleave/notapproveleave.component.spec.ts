import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotapproveleaveComponent } from './notapproveleave.component';

describe('NotapproveleaveComponent', () => {
  let component: NotapproveleaveComponent;
  let fixture: ComponentFixture<NotapproveleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotapproveleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotapproveleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
