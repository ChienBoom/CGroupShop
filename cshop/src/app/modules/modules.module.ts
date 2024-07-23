import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [ModulesComponent, HomeComponent, CategoryComponent],
})
export class ModulesModule {}
