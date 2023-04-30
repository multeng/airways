import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AirwaysRoutingModule } from './airways-routing.module';
import { LocationComponent } from './main-page/location/location.component';
import { TypeComponent } from './main-page/type/type.component';

@NgModule({
  imports: [
    SharedModule,
    AirwaysRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [MainPageComponent, LocationComponent, TypeComponent],
})
export class Airways {}
