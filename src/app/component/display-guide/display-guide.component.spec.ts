import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGuideComponent } from './display-guide.component';

describe('DisplayGuideComponent', () => {
  let component: DisplayGuideComponent;
  let fixture: ComponentFixture<DisplayGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
