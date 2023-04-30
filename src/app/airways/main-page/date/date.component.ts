import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formGroupRoot: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
  }
}
