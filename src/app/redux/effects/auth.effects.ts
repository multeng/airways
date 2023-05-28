import { Injectable, Inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { DecodedToken, StatusMessages } from '../../../constants';
import ApiService from '../../api/api.service';
import {
  logOutAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registerAction,
  registerSuccessActions,
  registerSuccessFailure,
} from '../actions/auth.actions';

@Injectable()
export default class AuthEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private cookieService: CookieService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ user }) =>
        this.api.registerNewUser(user).pipe(
          map(() => {
            this.alerts
              .open(StatusMessages.successfullyRegistred, {
                status: TuiNotification.Success,
              })
              .subscribe();
            return registerSuccessActions();
          }),
          catchError(({ errorMessage }) => {
            this.alerts
              .open(StatusMessages.successfullyRegistred + errorMessage, {
                status: TuiNotification.Error,
              })
              .subscribe();
            return of(registerSuccessFailure(errorMessage));
          })
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ email, password }) =>
        this.api.login(email, password).pipe(
          map(({ access_token }) => {
            const { user, exp }: DecodedToken = jwt_decode(access_token);
            this.cookieService.set('token', access_token, {
              path: '/',
              expires: new Date(exp * 1000),
            });
            this.alerts
              .open(StatusMessages.successfullyLogin, {
                status: TuiNotification.Success,
              })
              .subscribe();
            return loginSuccessAction({ user });
          }),
          catchError(({ errorMessage }) => {
            this.alerts
              .open(StatusMessages.failureLogin + errorMessage, {
                status: TuiNotification.Error,
              })
              .subscribe();
            return of(loginFailureAction(errorMessage));
          })
        )
      )
    );
  });

  logOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logOutAction),
        tap(() => {
          this.cookieService.delete('token', '/');
        })
      );
    },
    { dispatch: false }
  );
}
