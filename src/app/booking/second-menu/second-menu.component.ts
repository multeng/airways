import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLabelModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiInputCountModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiStepperModule,
} from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import {
  TuiDay,
  TuiDayRange,
  TuiLetModule,
  TuiPortalModule,
} from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { CdkStepperModule } from '@angular/cdk/stepper';
import Airport from '../../models/airports.model';
import ApiService from '../../api/api.service';

@Component({
  selector: 'app-second-menu',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiDropdownModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiMoneyModule,
    TuiModeModule,
    TuiInputDateRangeModule,
    TuiLetModule,
    TuiInputModule,
    TuiDataListModule,
    TuiPortalModule,
    TuiInputNumberModule,
    FormsModule,
    TuiHostedDropdownModule,
    TuiFilterByInputPipeModule,
    TuiInputCountModule,
    TuiLabelModule,
    CdkStepperModule,
    TuiStepperModule,
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
