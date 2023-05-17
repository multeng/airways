import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CalendarFactoryService } from '../../../core/services/calendar-factory.service';
import { HeaderState } from '../../../redux/reducers/header-settings.reducer';
import { TripType } from '../../../shared/models/main-page.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container =
    {} as ViewContainerRef;

  type = new Observable();

  dateFormatSubscribtion = new Subscription();

  dateFormat: string = TripType.oneWay;

  searchFlightsForm = new FormGroup({
    passengers: new FormGroup({
      adults: new FormControl(0),
      child: new FormControl(0),
      infant: new FormControl(0),
    }),
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

  constructor(
    private calendarFactory: CalendarFactoryService,
    private store: Store<{ headerState: HeaderState }>
  ) {}

  ngOnInit(): void {
    this.type = this.searchFlightsForm.controls.tripType.valueChanges;
    this.type.subscribe(() => {
      if (this.tripType.value) {
        this.createCalendar(this.tripType.value);
      }
    });
    this.dateFormatSubscribtion = this.store
      .select('headerState')
      .subscribe((state) => {
        this.dateFormat = state.dateFormat;
        try {
          if (this.tripType.value) {
            this.createCalendar(this.tripType.value);
          }
        } catch (error) {
          console.log(error);
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.tripType.value) {
      this.createCalendar(this.tripType.value);
    }
  }

  onSubmit() {
    console.log(this.searchFlightsForm);
  }

  get tripType() {
    return this.searchFlightsForm.controls.tripType.controls.type;
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

  createCalendar(type: TripType) {
    let componentRef;
    if (type === TripType.oneWay) {
      componentRef = this.calendarFactory.createOneWayCalendar(
        this.modifyDateFormat(this.dateFormat)
      );
      componentRef.instance.changeDateValue.subscribe((data: TuiDay) => {
        this.searchFlightsForm.controls.date.controls.oneWay.setValue(data);
      });
    } else {
      componentRef = this.calendarFactory.createRangeCalendar(
        this.modifyDateFormat(this.dateFormat)
      );
      componentRef.instance.changeDateValue.subscribe((data: TuiDayRange) => {
        this.searchFlightsForm.controls.date.controls.range.setValue(data);
      });
    }

    this.container.clear();
    this.container.insert(componentRef.hostView);
  }

  createRangeCalendar() {
    const componentRef = this.calendarFactory.createOneWayCalendar(
      this.modifyDateFormat(this.dateFormat)
    );
    componentRef.instance.changeDateValue.subscribe((data: TuiDay) => {
      this.searchFlightsForm.controls.date.controls.oneWay.setValue(data);
    });
    this.container.clear();
    this.container.insert(componentRef.hostView);
  }

  modifyDateFormat(value: string) {
    return value.split('/').reduce((acc, elem) => acc + elem[0], '');
  }
}
