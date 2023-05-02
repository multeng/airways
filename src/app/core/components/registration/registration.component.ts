import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegistrationComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    date: new FormControl(''),
    sex: new FormControl('male'),
    phone: new FormControl(''),
    citizenship: new FormControl('Afghanistan'),
    privacy: new FormControl(false),
  });

  citizenships = ['Afghanistan', 'Albania'];

  countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.RU;
}
