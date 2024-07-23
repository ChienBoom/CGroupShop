import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulesComponent } from './Modules.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ModulesRoutingModule],
  declarations: [ModulesComponent, HomeComponent, CategoryComponent],
})
export class ModulesModule {}
