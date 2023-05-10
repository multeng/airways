import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import AuthPageComponent from './pages/auth-page/auth-page.component';
import LoginComponent from './components/login/login.component';
import RegistrationComponent from './components/registration/registration.component';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import SharedModule from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProgressBarComponent,
    AuthPageComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, CommonModule],

  exports: [HeaderComponent, AuthPageComponent],
})
export default class CoreModule {}
