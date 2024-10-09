import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import flatpickr from 'flatpickr';
import * as moment from 'moment';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.scss'],
})
export class TestCompoComponent implements OnInit {
  form!: FormGroup;
  lstOption = [
    {
      id: '1',
      name: 'mot',
      age: '1',
    },
    {
      id: '2',
      name: 'hai',
      age: '2',
    },
    {
      id: '3',
      name: 'ba',
      age: '3',
    },
    {
      id: '22',
      name: 'haihai',
      age: '3',
    },
  ];
  disabled: boolean = true;
  panelOpenState = false;

  public showSpinners = true;
  public showSeconds = true;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  testDate = moment().toISOString();

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      test1: new FormControl('', Validators.required),
      test2: new FormControl(moment(-1, 'D').toISOString()),
      test5: new FormControl(true),
    });
  }

  handleChangeDisable() {
    this.disabled = !this.disabled;
  }

  save() {
    console.log('form: ', this.form.value);
  }

  handleChange(event: any) {
    console.log(event);
  }

  handleChangeColor(event: any) {
    console.log('color: ', event);
  }

  switchLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }
}
