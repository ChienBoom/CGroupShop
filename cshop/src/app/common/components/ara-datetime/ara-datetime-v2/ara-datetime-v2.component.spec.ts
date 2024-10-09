import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraDateTimeV2Component } from './ara-datetime-v2.component';

describe('AraDatetimeComponent', () => {
  let component: AraDateTimeV2Component;
  let fixture: ComponentFixture<AraDateTimeV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraDateTimeV2Component],
    });
    fixture = TestBed.createComponent(AraDateTimeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
