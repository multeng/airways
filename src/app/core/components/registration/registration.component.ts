import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TuiBreakpointService } from '@taiga-ui/core';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { Store } from '@ngrx/store';
import User from '../../../shared/models/user.model';
import citizenships from './citizenships';
import { registerAction } from '../../../redux/actions/auth.actions';

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
    readonly breakpoint$: TuiBreakpointService,
    private store: Store
  ) {}

  readonly citizenships = citizenships;

  readonly countries = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.RU;

  data(data: string) {
    return !!this.registerForm.get(data)?.valid;
  }

  submit() {
    const ref = this.registerForm.value;
    const user = new User(
      ref.fname || '',
      ref.email || '',
      ref.lname || '',
      ref.date || new Date(),
      ref.gender || '',
      ref.phone || '',
      ref.password || '',
      ref.citizenship || ''
    );
    this.store.dispatch(registerAction({ user }));
    this.registerForm.reset();
  }
}
