import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraAutocompleteComponent } from './ara-autocomplete.component';

describe('AraAutocompleteComponent', () => {
  let component: AraAutocompleteComponent;
  let fixture: ComponentFixture<AraAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AraAutocompleteComponent]
    });
    fixture = TestBed.createComponent(AraAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
