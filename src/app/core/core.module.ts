import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import AuthPageComponent from './pages/auth-page/auth-page.component';

@NgModule({
  declarations: [HeaderComponent, AuthPageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiSvgModule,
  ],
  exports: [HeaderComponent, AuthPageComponent],
})
export class CoreModule {}
