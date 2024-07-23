import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './future/home/home.component';
import { CategoryComponent } from './future/category/category.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'layout',
    component:LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
