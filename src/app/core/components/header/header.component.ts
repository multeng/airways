import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../../redux/index';
import {
  updateCurrency,
  updateDateFormat,
} from '../../../redux/actions/header-settings.action';
import { HeaderState } from '../../../redux/reducers/header-settings.reducer';
import { Currencies, DateFormat } from '../../../shared/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  settingsVisible = false;

  dateFormats = [
    DateFormat.DMY,
    DateFormat.MDY,
    DateFormat.YDM,
    DateFormat.YMD,
  ];

  currencies = [Currencies.EUR, Currencies.RUB, Currencies.USD];

  headerSettings: Observable<HeaderState> = new Observable<HeaderState>();

  headerSettingsForm = new FormGroup({
    dateFormat: new FormControl(DateFormat.DMY),
    currency: new FormControl(Currencies.RUB),
  });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.headerSettings = this.store.select('headerSettingsState');
  }

  changeDateFormat() {
    if (!this.dateFormat.value) return;
    this.store.dispatch(updateDateFormat({ content: this.dateFormat.value }));
  }

  changeCurrency() {
    if (!this.currency.value) return;
    this.store.dispatch(updateCurrency({ content: this.currency.value }));
  }

  get dateFormat() {
    return this.headerSettingsForm.controls.dateFormat;
  }

  get currency() {
    return this.headerSettingsForm.controls.currency;
  }

  showSettings(elem: ElementRef) {
    const element: HTMLElement = elem.nativeElement;
    if (this.settingsVisible) {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex';
    }
    this.settingsVisible = !this.settingsVisible;
  }
}
