import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'ara-datetime-v2',
  templateUrl: './ara-datetime-v2.component.html',
  styleUrls: ['./ara-datetime-v2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AraDateTimeV2Component,
      multi: true,
    },
  ],
})
export class AraDateTimeV2Component implements ControlValueAccessor, OnInit {
  @Input() value: string = moment().clone().format('dd/MM/yyyy HH:mm:ss');
  @Input() disabled: boolean = false;

  _onChangeTime: (value: any) => void = () => {};
  _onTouchTime: () => void = () => {};

  ngOnInit(): void {
    console.log("value: ", this.value)
  }

  handleChange(event: any) {
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
