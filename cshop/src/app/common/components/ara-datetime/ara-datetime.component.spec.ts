import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraDateTimeComponent } from './ara-datetime.component';

describe('AraDatetimeComponent', () => {
  let component: AraDateTimeComponent;
  let fixture: ComponentFixture<AraDateTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraDateTimeComponent],
    });
    fixture = TestBed.createComponent(AraDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
