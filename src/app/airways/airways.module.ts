import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import SharedModule from '../shared/shared.module';
import MainPageComponent from './pages/main-page/main-page.component';
import LocationComponent from './components/location/location.component';
import TypeComponent from './components/type/type.component';
import DateComponent from './components/date/date.component';
import DateRangeComponent from './components/date-range/date-range.component';
import PassengersComponent from './components/passengers/passengers.component';
import AirwaysRoutingModule from './airways-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AirwaysRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    MainPageComponent,
    LocationComponent,
    TypeComponent,
    DateComponent,
    DateRangeComponent,
    PassengersComponent,
  ],
})
class Airways {}

export default Airways;
