import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelButtonmComponent } from './del-buttonm.component';

describe('DelButtonmComponent', () => {
  let component: DelButtonmComponent;
  let fixture: ComponentFixture<DelButtonmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelButtonmComponent]
    });
    fixture = TestBed.createComponent(DelButtonmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
