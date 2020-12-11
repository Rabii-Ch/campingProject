import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCircuitComponent } from './display-circuit.component';

describe('DisplayCircuitComponent', () => {
  let component: DisplayCircuitComponent;
  let fixture: ComponentFixture<DisplayCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCircuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
