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

  readonly min = new TuiDay(2000, 2, 20);

  readonly max = new TuiDay(2040, 2, 20);

  constructor(@Inject(TUI_DATE_FORMAT) private tokenValue: string) {}

  changeValue() {
    this.changeDateValue.emit(this.form.controls['range'].value);
  }
}
