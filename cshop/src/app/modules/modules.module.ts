import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { ComModule } from '../common/components/com.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ComModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    FlatpickrModule.forRoot(),
  ],
  declarations: [
    ModulesComponent,
    HomeComponent,
    CategoryComponent,
    TestCompoComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class ModulesModule {}
