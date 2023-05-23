import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import WorkWithApiComponent from './api/work-with-api/work-with-api.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./airways/airways.module').then((m) => m.default),
  },
  { path: 'test', component: WorkWithApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
