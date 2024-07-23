import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulesComponent } from './Modules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModulesComponent],
})
export class ModulesModule {}
