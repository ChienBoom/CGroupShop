import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './future/home/home.component';
import { CategoryComponent } from './future/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
