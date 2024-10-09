import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraDatepickerComponent } from './ara-datepicker.component';

describe('AraDatepickerComponent', () => {
  let component: AraDatepickerComponent;
  let fixture: ComponentFixture<AraDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraDatepickerComponent]
    });
    fixture = TestBed.createComponent(AraDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
