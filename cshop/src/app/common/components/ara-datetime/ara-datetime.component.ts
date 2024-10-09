import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'ara-datetime',
  templateUrl: './ara-datetime.component.html',
  styleUrls: ['./ara-datetime.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AraDateTimeComponent,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AraDateTimeComponent implements ControlValueAccessor {
  // @Input() value: string = moment().clone().format('HH:mm:ss');
  @Input() value: string = moment().toISOString();
  @Input() disabled: boolean = false;

  _onChangeTime: (value: any) => void = () => {};
  _onTouchTime: () => void = () => {};

  onChangeValue(event: any) {
    console.log('event: ', event);
    this._onChangeTime(event.target.value);
    this._onTouchTime();
  }

  registerOnChange(fn: any): void {
    this._onChangeTime = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchTime = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
