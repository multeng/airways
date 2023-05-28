import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import HeaderComponent from './components/header/header.component';
import ProgressBarComponent from './components/header/progress-bar/progress-bar.component';
import SharedModule from '../shared/shared.module';
import AuthPageComponent from './pages/auth-page/auth-page.component';
import LoginComponent from './components/login/login.component';
import RegistrationComponent from './components/registration/registration.component';
import FooterComponent from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProgressBarComponent,
    AuthPageComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent, AuthPageComponent, FooterComponent],
})
export default class CoreModule {}
