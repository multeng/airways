import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiGroupModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputDateModule,
  TuiRadioBlockModule,
  TuiRadioModule,
  TuiInputPhoneInternationalModule,
  TuiSortCountriesPipeModule,
  TuiInputPhoneModule,
  TuiCheckboxLabeledModule,
} from '@taiga-ui/kit';
import { TuiPortalModule } from '@taiga-ui/cdk';
import AuthPageComponent from './pages/auth-page/auth-page.component';
import LoginComponent from './components/login/login.component';
import RegistrationComponent from './components/registration/registration.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthPageComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputDateModule,
    TuiRadioBlockModule,
    TuiRadioModule,
    TuiGroupModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
    TuiInputPhoneModule,
    CommonModule,
    TuiCheckboxLabeledModule,
    TuiPortalModule,
  ],
  exports: [HeaderComponent, AuthPageComponent],
})
export class CoreModule {}
