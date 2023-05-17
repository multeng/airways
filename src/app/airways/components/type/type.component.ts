import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TripType } from '../../../shared/models/main-page.model';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export default class TypeComponent implements OnInit {
  tripTypes = [TripType.round, TripType.oneWay];

  form: FormGroup = new FormGroup({});

  constructor(private formGroupRoot: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
  }
}
