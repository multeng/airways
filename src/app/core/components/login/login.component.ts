import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiBreakpointService } from '@taiga-ui/core';
import { loginAction } from '../../../redux/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    @Inject(TuiBreakpointService)
    readonly breakpoint$: TuiBreakpointService,
    private store: Store
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    this.store.dispatch(
      loginAction({
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      })
    );
    this.loginForm.reset();
  }
}
