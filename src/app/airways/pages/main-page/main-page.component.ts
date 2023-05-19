import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDate } from '../../../redux/selectors/header.selector';
import CalendarFactoryService from '../../../core/services/calendar-factory.service';
import { TripType } from '../../../shared/models/main-page.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('container', { read: ViewContainerRef }) container =
    {} as ViewContainerRef;

  type = new Observable();

  dateFormatSubscribtion = new Subscription();

  typeSubscription = new Subscription();

  changeDateSubscription = new Subscription();

  dateFormat: string = TripType.oneWay;

  searchFlightsForm = new FormGroup({
    passengers: new FormGroup({
      adults: new FormControl(0, [Validators.required]),
      child: new FormControl(0, [Validators.required]),
      infant: new FormControl(0, [Validators.required]),
    }),
    tripType: new FormGroup({
      type: new FormControl(TripType.round, [Validators.required]),
    }),
    location: new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
    }),
    date: new FormGroup(
      {
        oneWay: new FormControl<TuiDay | null>(null, [
          Validators.nullValidator,
          this.dateOneWayValidator.bind(this),
        ]),
        range: new FormControl<TuiDayRange | null>(null, [
          Validators.nullValidator,
          this.dateRangeValidator.bind(this),
        ]),
      },
      { validators: this.dateGroupValidator() }
    ),
  });

  constructor(
    private calendarFactory: CalendarFactoryService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.type = this.searchFlightsForm.controls.tripType.valueChanges;
    this.typeSubscription = this.type.subscribe(() => {
      if (this.tripType.value) {
        this.createCalendar(this.tripType.value);
      }
    });
    this.dateFormatSubscribtion = this.store
      .select(selectDate)
      .subscribe((date) => {
        this.dateFormat = date;
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

  ngOnDestroy(): void {
    this.dateFormatSubscribtion.unsubscribe();
    this.typeSubscription.unsubscribe();
    this.changeDateSubscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.searchFlightsForm);
  }

  get tripType() {
    return this.searchFlightsForm.controls.tripType.controls.type;
  }

  isOneWayTrip() {
    return this.tripType.value === TripType.oneWay;
  }

  dateGroupValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      if (group.get('oneWay')?.value || group.get('range')?.value) {
        return null;
      }
      return { date: true };
    };
  }

  dateOneWayValidator(control: FormControl<TuiDay>): ValidationErrors | null {
    if (!control.value || this.checkDate(control.value)) {
      return null;
    }
    return { date: true };
  }

  dateRangeValidator(
    control: FormControl<TuiDayRange>
  ): ValidationErrors | null {
    if (!control.value || this.checkDate(control.value.from)) {
      return null;
    }
    return { date: true };
  }

  checkDate(day: TuiDay): boolean {
    const current = new Date().getTime();
    const date = new Date(day.year, day.month, day.day).getTime();
    return date > current;
  }

  createCalendar(type: TripType) {
    let componentRef;
    if (type === TripType.oneWay) {
      componentRef = this.calendarFactory.createOneWayCalendar(
        this.modifyDateFormat(this.dateFormat)
      );
      this.changeDateSubscription =
        componentRef.instance.changeDateValue.subscribe((data: TuiDay) => {
          this.searchFlightsForm.controls.date.controls.oneWay.setValue(data);
        });
    } else {
      componentRef = this.calendarFactory.createRangeCalendar(
        this.modifyDateFormat(this.dateFormat)
      );
      this.changeDateSubscription =
        componentRef.instance.changeDateValue.subscribe((data: TuiDayRange) => {
          this.searchFlightsForm.controls.date.controls.range.setValue(data);
        });
    }

    this.container.clear();
    this.container.insert(componentRef.hostView);
  }

  modifyDateFormat(value: string) {
    return value.split('/').reduce((acc, elem) => acc + elem[0], '');
  }
}
