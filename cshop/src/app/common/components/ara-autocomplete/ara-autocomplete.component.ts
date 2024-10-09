import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ara-autocomplete',
  templateUrl: './ara-autocomplete.component.html',
  styleUrls: ['./ara-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AraAutocompleteComponent),
      multi: true,
    },
  ],
})
export class AraAutocompleteComponent
  implements OnInit, ControlValueAccessor, OnChanges
{
  @Input() useForm: boolean = true; // Sử dụng/ Không sử dụng Form
  @Input() formGroup: FormGroup | undefined; // FormGroup (Sử dụng với useForm = true)
  @Input() controlName: string = ''; // ControlName  (Sử dụng với useForm = true)
  @Input() lstOption: any[] = []; // Danh sách các option
  @Input() value: string = ''; // Giá trị truyền vào (Sử dụng với useForm = false)
  @Input() displayOption: string = 'name'; // Trường thông tin được sử dụng hiển thị của option
  @Input() valueOption: string = 'id'; // Trường thông tin được sử dụng làm value của option
  @Input() label: string = ''; // Nhãn
  @Input() required: boolean = false; // Cho biết trường thông tin là bắt buộc/ không bắt buộc
  @Input() disabled: boolean = false; // Cho biết component disable/enable
  @Input() inputValue: string = '';

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  disableFormControl: boolean = false; // disable/enable FormControl
  control: any = {}; //FormControl
  filteredOptions: any[] = [];

  _onChange: (value: any) => void = () => {};
  _onTouch: () => void = () => {};

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    if (this.useForm) {
      this.control = this.formGroup?.get(this.controlName);
      this.value = this.control?.value ? this.control.value : '';
    }
    const op = this.lstOption.find(
      (option) => option[this.valueOption] == this.value
    );
    this.inputValue = op ? op[this.displayOption] : '';
    this._onChange(this.value);
  }

  handleChangeInput(value: any) {
    this.inputValue = value.target.value;
    this.filteredOptions = this._filter(this.inputValue);
  }

  handleFocus() {
    this.filteredOptions = this._filter(this.inputValue);
  }
  handleBlur() {
    this._onTouch();
  }

  handleChangeSelect(value: any) {
    this.value = value.option.value;
    this._onChange(value.option.value);
  }

  displayWith = (value: any) => {
    const op = this.lstOption.find(
      (option) => option[this.valueOption] == value
    );
    return op[this.displayOption];
  };

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.lstOption.filter((option) =>
      option[this.displayOption].toLowerCase().includes(filterValue)
    );
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
