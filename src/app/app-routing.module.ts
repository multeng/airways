import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import WorkWithApiComponent from './api/work-with-api/work-with-api.component';
import SecondPageComponent from './airways/pages/second-page/second-page.component';
import CartComponent from './airways/pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./airways/airways.module'),
  },
  { path: 'test', component: WorkWithApiComponent },
  { path: 'booking', component: SecondPageComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
