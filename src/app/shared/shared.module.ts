import { NgModule } from '@angular/core';
import { TuiValueChangesModule } from '@taiga-ui/cdk';
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

@NgModule({
  imports: [
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiProgressModule,
    TuiValueChangesModule,
  ],
  exports: [
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiProgressModule,
    TuiValueChangesModule,
  ],
})
export class SharedModule {}
