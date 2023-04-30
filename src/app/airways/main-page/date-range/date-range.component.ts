import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export class DateRangeComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  readonly min = new TuiDay(2000, 2, 20);

  readonly max = new TuiDay(2040, 2, 20);

  constructor(private formGroupRoot: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
  }
}
