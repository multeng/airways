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

@NgModule({
  declarations: [HeaderComponent],
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
  exports: [HeaderComponent],
})
export class CoreModule {}
