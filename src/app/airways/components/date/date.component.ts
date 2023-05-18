import {
  Component,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TUI_DATE_FORMAT, TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export default class DateComponent {
  @Output() changeDateValue = new EventEmitter<TuiDay>();

  @ViewChild('input') input = {} as HTMLInputElement;

  form = new FormGroup({
    date: new FormControl(),
  });

  constructor(@Inject(TUI_DATE_FORMAT) private tokenValue: string) {}

  changeValue() {
    this.changeDateValue.emit(this.form.controls.date.value);
  }
}
