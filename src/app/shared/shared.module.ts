import { NgModule } from '@angular/core';
import {
  TuiValueChangesModule,
  TuiElementModule,
  TuiLetModule,
  TuiValidatorModule,
} from '@taiga-ui/cdk';
import { TuiElementModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import { TuiLetModule, TuiValueChangesModule } from '@taiga-ui/cdk';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiCalendarModule,
  TuiGroupModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiProgressModule,
  TuiRadioLabeledModule,
  TuiComboBoxModule,
  TuiInputDateModule,
  TuiInputDateRangeModule,
  TuiInputNumberModule,
  TuiInputCountModule,
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
    TuiCalendarModule,
    TuiInputDateModule,
    TuiInputDateRangeModule,
    TuiValidatorModule,
    TuiInputNumberModule,
    TuiInputCountModule,
    TuiGroupModule,
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
    TuiCalendarModule,
    TuiInputDateModule,
    TuiInputDateRangeModule,
    TuiValidatorModule,
    TuiInputNumberModule,
    TuiInputCountModule,
    TuiGroupModule,
  ],
})
export class SharedModule {}
