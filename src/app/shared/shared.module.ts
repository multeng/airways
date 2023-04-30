import { NgModule } from '@angular/core';
import {
  TuiValueChangesModule,
  TuiElementModule,
  TuiLetModule,
  TuiValidatorModule,
} from '@taiga-ui/cdk';
import {
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiSvgModule,
  TuiCalendarModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiProgressModule,
  TuiRadioLabeledModule,
  TuiComboBoxModule,
  TuiInputDateModule,
  TuiInputDateRangeModule,
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
  ],
})
export class SharedModule {}
