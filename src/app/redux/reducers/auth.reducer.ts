import { createReducer, on } from '@ngrx/store';
import {
  openAuthModalAction,
  closeAuthModalAction,
  registerAction,
  registerSuccessActions,
  registerSuccessFailure,
  loginAction,
  loginSuccessAction,
  loginFailureAction,
  logOutAction,
} from '../actions/auth.actions';
import User from '../../shared/models/user.model';

export const authFeatureKey = 'auth';

const newUser: User = new User(
  'Vladimir',
  'multeng@ya.ru',
  'Kormakov',
  new Date(),
  'male',
  '89167860567',
  'asdfg',
  'Russia'
);

export interface AuthState {
  user: Omit<User, 'password'> | null;
  isLoggedIn: boolean;
  isModalOpen: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isModalOpen: false,
  errorMessage: '',
  isLoading: false,
};

export const AuthReducer = createReducer(
  initialState,
  on(
    openAuthModalAction,
    (state): AuthState => ({ ...state, isModalOpen: true })
  ),
  on(
    closeAuthModalAction,
    (state): AuthState => ({ ...state, isModalOpen: false })
  ),
  on(registerAction, (state): AuthState => ({ ...state, isLoading: true })),
  on(
    registerSuccessActions,
    (state): AuthState => ({ ...state, isLoading: false, isModalOpen: false })
  ),
  on(
    registerSuccessFailure,
    (state, { errorMessage }): AuthState => ({
      ...state,
      isLoading: false,
      errorMessage,
    })
  ),
  on(loginAction, (state): AuthState => ({ ...state, isLoading: true })),
  on(
    loginSuccessAction,
    (state, { user }): AuthState => ({
      ...state,
      isLoading: false,
      user,
      isModalOpen: false,
    })
  ),
  on(
    loginFailureAction,
    (state, { errorMessage }): AuthState => ({
      ...state,
      isLoading: false,
      errorMessage,
    })
  ),
  on(
    logOutAction,
    (state): AuthState => ({ ...state, isLoggedIn: false, user: null })
  )
);
