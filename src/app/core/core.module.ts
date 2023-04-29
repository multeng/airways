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
  TuiProgressModule,
} from '@taiga-ui/kit';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
