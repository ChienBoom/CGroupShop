import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraRadioComponent } from './ara-radio.component';

describe('AraRadioComponent', () => {
  let component: AraRadioComponent;
  let fixture: ComponentFixture<AraRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraRadioComponent]
    });
    fixture = TestBed.createComponent(AraRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
