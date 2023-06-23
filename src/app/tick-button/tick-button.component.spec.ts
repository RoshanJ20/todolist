import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickButtonComponent } from './tick-button.component';

describe('TickButtonComponent', () => {
  let component: TickButtonComponent;
  let fixture: ComponentFixture<TickButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickButtonComponent]
    });
    fixture = TestBed.createComponent(TickButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
