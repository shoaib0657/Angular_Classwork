import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeassignment1Component } from './homeassignment1.component';

describe('Homeassignment1Component', () => {
  let component: Homeassignment1Component;
  let fixture: ComponentFixture<Homeassignment1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homeassignment1Component]
    });
    fixture = TestBed.createComponent(Homeassignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
