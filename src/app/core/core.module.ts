import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import AuthPageComponent from './pages/auth-page/auth-page.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  declarations: [HeaderComponent, AuthPageComponent, LoginComponent],
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
  ],
  exports: [HeaderComponent, AuthPageComponent],
})
export class CoreModule {}
