import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './future/home/home.component';
import { CategoryComponent } from './future/category/category.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: '/category',
        component: CategoryComponent,
      },
      { path: 'notfound', component: HomeComponent },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
