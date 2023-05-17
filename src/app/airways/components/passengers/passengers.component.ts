import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PassengersComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formGroupRoot: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
    console.log(this.form);
  }
}
