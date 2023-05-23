import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import WorkWithApiComponent from './api/work-with-api/work-with-api.component';
import SecondMenuComponent from './booking/second-menu/second-menu.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./airways/airways.module'),
  },
  { path: 'test', component: WorkWithApiComponent },
  { path: 'booking', component: SecondMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
