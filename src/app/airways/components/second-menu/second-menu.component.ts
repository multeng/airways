import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { TuiDay, TuiDayRange, TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiInputCountModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import ApiService from '../../../api/api.service';
import SharedModule from '../../../shared/shared.module';
import Airport from '../../../shared/models/airports.model';

@Component({
  selector: 'app-second-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TuiDropdownModule,
    TuiInputModule,
    TuiDataListModule,
    TuiTextfieldControllerModule,
    TuiLetModule,
    TuiInputDateRangeModule,
    TuiSelectModule,
    TuiInputCountModule,
    TuiButtonModule,
  ],
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SecondMenuComponent {
  isOpen = false;

  isOpenPassengersSelect = false;

  airports$ = new Observable<Airport[]>();

  adults = 0;

  child = 0;

  infants = 0;

  constructor(public api: ApiService) {}

  secondMenuForm = new FormGroup({
    from: new FormControl(`Dublin`, [
      Validators.minLength(3),
      Validators.required,
    ]),
    to: new FormControl(`Warsaw Modlin`, Validators.required),
    dates: new FormControl(
      new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20))
    ),
    passengers: new FormGroup({
      adults: new FormControl(0),
      child: new FormControl(0),
      infants: new FormControl(0),
    }),
  });

  onClick(): void {
    this.isOpen = !this.isOpen;
  }

  onPassengersSelect(): void {
    this.isOpenPassengersSelect = !this.isOpenPassengersSelect;
    console.log(this.isOpenPassengersSelect);
  }

  filter(val: FormControl) {
    if (val.valid) {
      this.airports$ = this.api.getAirports(val.value as string, 100);
    }
  }

  getDate() {
    const datePipe = new DatePipe('en');
    const dateFrom = datePipe.transform(
      this.secondMenuForm.controls?.dates.value?.from.toUtcNativeDate(),
      'dd MMM'
    ) as string;
    const dateTo = datePipe.transform(
      this.secondMenuForm.controls?.dates.value?.to.toUtcNativeDate(),
      'dd MMM'
    ) as string;
    return `${dateFrom} - ${dateTo}`;
  }
}
