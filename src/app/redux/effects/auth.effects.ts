import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import ApiService from '../../api/api.service';
import {
  registerAction,
  registerSuccessActions,
  registerSuccessFailure,
} from '../actions/auth.actions';

@Injectable()
export default class AuthEffects {
  constructor(private actions$: Actions, private api: ApiService) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ user }) => {
        console.log(user);
        return this.api.registerNewUser(user).pipe(
          map(() => registerSuccessActions()),
          catchError(({ errorMessage }) =>
            of(registerSuccessFailure(errorMessage))
          )
        );
      })
    );
  });
}
