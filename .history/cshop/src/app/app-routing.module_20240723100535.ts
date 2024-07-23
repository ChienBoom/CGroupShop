import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModulesComponent } from './modules/Modules.component';
import { ModulesModule } from './modules/modules.module';

const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => ModulesModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
