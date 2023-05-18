import { createReducer, on } from '@ngrx/store';
import {
  openAuthModalAction,
  closeAuthModalAction,
  registerAction,
  registerSuccessActions,
  registerSuccessFailure,
} from '../actions/auth.actions';
import User from '../../shared/models/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | null;
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
    (state): AuthState => ({ ...state, isLoading: false })
  ),
  on(
    registerSuccessFailure,
    (state, { errorMessage }): AuthState => ({
      ...state,
      isLoading: false,
      errorMessage,
    })
  )
);
