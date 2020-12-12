import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMaterielComponent } from './display-materiel.component';

describe('DisplayMaterielComponent', () => {
  let component: DisplayMaterielComponent;
  let fixture: ComponentFixture<DisplayMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
