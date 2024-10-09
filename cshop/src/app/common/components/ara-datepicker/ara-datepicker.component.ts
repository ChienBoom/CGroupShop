import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'ara-datepicker',
  templateUrl: './ara-datepicker.component.html',
  styleUrls: ['./ara-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AraDatepickerComponent),
      multi: true,
    },
  ],
})
export class AraDatepickerComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() useForm: boolean = true; //Xác định có sử dụng form hay không. Nếu không sử dụng form thì binding qua giá trị value và onChange
  @Input() value: string = ''; //Giá trị value nếu không sử dụng form
  @Input() label: string = '';
  @Input() disable: boolean = false;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  _onChange: (value: any) => void = () => {};
  _onTouch: () => void = () => {};

  disableFormControl: boolean = false;

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this._locale = 'vi';
    this._adapter.setLocale(this._locale);
  }

  handleChangeDate(event: any) {
    if (!this.useForm) {
      this.value = event.target.value.toISOString();
    }
    this._onChange(event.target.value.toISOString());
    this.onChange.emit(event.target.value.toISOString());
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disableFormControl = isDisabled;
  }
}
