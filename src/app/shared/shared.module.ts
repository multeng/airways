import { NgModule } from '@angular/core';
import { TuiElementModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import { TuiLetModule, TuiValueChangesModule } from '@taiga-ui/cdk';
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
  TuiRadioLabeledModule,
  TuiComboBoxModule,
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
    TuiRadioLabeledModule,
    TuiComboBoxModule,
    TuiLetModule,
    TuiElementModule,
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
    TuiRadioLabeledModule,
    TuiComboBoxModule,
    TuiLetModule,
    TuiElementModule,
  ],
})
export class SharedModule {}
