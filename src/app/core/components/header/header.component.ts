import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';
import { selectHeaderStateFeature } from '../../../redux/selectors/header.selector';
import {
  selectIsLoggedIn,
  selectUserName,
} from '../../../redux/selectors/auth.selector';
import {
  updateCurrency,
  updateDateFormat,
} from '../../../redux/actions/header-settings.action';
import { Currencies, DateFormat } from '../../../shared/models/header.model';
import {
  openAuthModalAction,
  logOutAction,
} from '../../../redux/actions/auth.actions';
import { UserMenu } from '../../../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  settingsVisible = false;

  dateFormats = [DateFormat.DMY, DateFormat.MDY, DateFormat.YMD];

  currencies = [Currencies.EUR, Currencies.RUB, Currencies.USD];

  options = [UserMenu.Purchases, UserMenu.Logout];

  userMenuIsOpen = false;

  headerSettings = this.store.select(selectHeaderStateFeature);

  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  userName$ = this.store.select(selectUserName);

  headerSettingsForm = new FormGroup({
    dateFormat: new FormControl(DateFormat.DMY),
    currency: new FormControl(Currencies.RUB),
  });

  constructor(private store: Store) {}

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

  showAuth() {
    this.store.dispatch(openAuthModalAction());
  }

  showSettings(elem: ElementRef) {
    const element: HTMLElement = elem.nativeElement;
    element.style.display = this.settingsVisible ? 'none' : 'flex';
    this.settingsVisible = !this.settingsVisible;
  }

  clickUserMenu(item: UserMenu) {
    switch (item) {
      case UserMenu.Logout:
        this.logOut();
        break;
      default:
    }
  }

  logOut() {
    this.store.dispatch(logOutAction());
  }
}
