import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModulesModule } from './modules/modules.module';
import { NotFoundComponent } from './layout/notfound/notfound.component';
import { TestCompoComponent } from './modules/test-compo/test-compo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => ModulesModule,
      },
    ],
  },
  { path: 'test', component: TestCompoComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
