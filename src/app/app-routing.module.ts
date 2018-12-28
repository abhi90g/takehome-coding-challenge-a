import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { TargetsComponent } from './targets/targets.component'
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
  {
    path: '',
    component: TargetsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
