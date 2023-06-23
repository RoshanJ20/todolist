import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstHeadingComponent } from './const-heading.component';

describe('ConstHeadingComponent', () => {
  let component: ConstHeadingComponent;
  let fixture: ComponentFixture<ConstHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstHeadingComponent]
    });
    fixture = TestBed.createComponent(ConstHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
