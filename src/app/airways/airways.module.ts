import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.module';
import MainPageComponent from './pages/main-page/main-page.component';
import LocationComponent from './components/location/location.component';
import TypeComponent from './components/type/type.component';
import DateComponent from './components/date/date.component';
import DateRangeComponent from './components/date-range/date-range.component';
import PassengersComponent from './components/passengers/passengers.component';
import AirwaysRoutingModule from './airways-routing.module';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  imports: [
    SharedModule,
    AirwaysRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MainPageComponent,
    LocationComponent,
    TypeComponent,
    DateComponent,
    DateRangeComponent,
    PassengersComponent,
    CartComponent,
  ],
})
class Airways {}

export default Airways;
