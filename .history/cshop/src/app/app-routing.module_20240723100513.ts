import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './future/home/home.component';
import { CategoryComponent } from './future/category/category.component';
import { LayoutComponent } from './layout/layout.component';
import { ModulesComponent } from './modules/Modules.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => ModulesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
