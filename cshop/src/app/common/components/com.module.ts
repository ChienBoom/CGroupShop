import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulesRoutingModule } from 'src/app/modules/modules-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

import { AraInputComponent } from './ara-input/ara-input.component';
import { AraSelectComponent } from './ara-select/ara-select.component';
import { AraAutocompleteComponent } from './ara-autocomplete/ara-autocomplete.component';
import { AraDatepickerComponent } from './ara-datepicker/ara-datepicker.component';
import { AraDaterangeComponent } from './ara-daterange/ara-daterange.component';
import { AraRadioComponent } from './ara-radio/ara-radio.component';
import { AraSlideToggleComponent } from './ara-slide-toggle/ara-slide-toggle.component';
import { AraColorPickerComponent } from './ara-color-picker/ara-color-picker.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TranslateModule } from '@ngx-translate/core';
import { AraDateTimeComponent } from './ara-datetime/ara-datetime.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { AraDateTimeV2Component } from './ara-datetime/ara-datetime-v2/ara-datetime-v2.component';

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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    // NgxMatMomentModule
    // NgxMatNativeDateModule
  ],
  declarations: [
    AraInputComponent,
    AraSelectComponent,
    AraAutocompleteComponent,
    AraDatepickerComponent,
    AraDaterangeComponent,
    AraRadioComponent,
    AraSlideToggleComponent,
    AraColorPickerComponent,
    AraDateTimeComponent,
    AraDateTimeV2Component,
  ],
  exports: [
    AraInputComponent,
    AraSelectComponent,
    AraAutocompleteComponent,
    AraSlideToggleComponent,
    AraColorPickerComponent,
    AraDatepickerComponent,
    AraDaterangeComponent,
    AraDateTimeComponent,
    AraDateTimeV2Component,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ComModule {}
