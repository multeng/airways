import {
  Component,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TUI_DATE_FORMAT, TuiDay, TuiDayRange } from '@taiga-ui/cdk';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export default class DateRangeComponent {
  form: FormGroup = new FormGroup({
    range: new FormControl(),
  });

  @Output() changeDateValue = new EventEmitter<TuiDayRange>();

  @ViewChild('input') input = {} as HTMLInputElement;

  min = TuiDay.fromLocalNativeDate(new Date());

  max = new TuiDay(this.min.year, this.min.month + 1, this.min.day);

  constructor(@Inject(TUI_DATE_FORMAT) private tokenValue: string) {}

  changeValue() {
    this.changeDateValue.emit(this.form.controls['range'].value);
  }
}
