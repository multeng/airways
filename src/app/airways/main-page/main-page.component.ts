import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TripType } from '../../shared/models/main-page.model';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  searchFlightsForm = new FormGroup({
    tripType: new FormGroup({
      type: new FormControl(TripType.round),
    }),
    location: new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    }),
    date: new FormGroup({
      oneWay: new FormControl(
        new TuiDay(
          this.currentDate.year,
          this.currentDate.month,
          this.currentDate.day
        )
      ),
      range: new FormControl(
        new TuiDayRange(
          new TuiDay(
            this.currentDate.year,
            this.currentDate.month,
            this.currentDate.day
          ),
          new TuiDay(
            this.currentDate.nextYear,
            this.currentDate.nextMonth,
            this.currentDate.nextDay
          )
        )
      ),
    }),
  });

  onSubmit() {
    console.log(this.searchFlightsForm);
  }

  get tripType() {
    return this.searchFlightsForm.controls['tripType'].controls['type'];
  }

  isOneWayTrip() {
    if (this.tripType.value === TripType.oneWay) return true;
    return false;
  }

  get currentDate() {
    const date = new Date();
    const nextDate = new Date(date.getTime() + 864000000);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      nextYear: nextDate.getFullYear(),
      nextMonth: nextDate.getMonth(),
      nextDay: nextDate.getDate(),
    };
  }
}
