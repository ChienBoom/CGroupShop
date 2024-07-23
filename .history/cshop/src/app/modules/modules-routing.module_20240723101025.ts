import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'category', component: HomeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
