import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ara-daterange',
  templateUrl: './ara-daterange.component.html',
  styleUrls: ['./ara-daterange.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AraDaterangeComponent),
      multi: true,
    },
  ],
})
export class AraDaterangeComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() label: string = '';

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  _onChange: (value: any) => void = () => {};
  _onTouch: () => void = () => {};

  disableFormControl: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  handleChangeStartDate(event: any) {
    console.log('start date: ', event);
  }

  handleChangeToDate(event: any) {
    console.log('to date: ', event);
  }

  writeValue(obj: any): void {}
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
