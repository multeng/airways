import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TuiBreakpointService } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import citizenships from './citizenships';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegistrationComponent {
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    fname: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    lname: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    date: new FormControl(null, [Validators.required]),
    gender: new FormControl('male'),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    citizenship: new FormControl(null, Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue),
  });

  constructor(
    @Inject(TuiBreakpointService)
    readonly breakpoint$: TuiBreakpointService
  ) {}

  readonly citizenships = citizenships;

  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.RU;

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get fname() {
    return this.registerForm.get('fname');
  }

  get lname() {
    return this.registerForm.get('lname');
  }

  get date() {
    return this.registerForm.get('date');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get citizenship() {
    return this.registerForm.get('citizenship');
  }

  get privacy() {
    return this.registerForm.get('privacy');
  }

  submit() {
    console.log(this.registerForm.value);
  }
}
