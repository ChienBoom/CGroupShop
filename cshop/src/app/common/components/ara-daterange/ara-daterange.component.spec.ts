import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraDaterangeComponent } from './ara-daterange.component';

describe('AraDaterangeComponent', () => {
  let component: AraDaterangeComponent;
  let fixture: ComponentFixture<AraDaterangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraDaterangeComponent]
    });
    fixture = TestBed.createComponent(AraDaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
