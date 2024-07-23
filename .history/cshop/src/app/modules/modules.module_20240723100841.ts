import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulesComponent } from './Modules.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeComponent
  ],
  declarations: [ModulesComponent],
})
export class ModulesModule {}
