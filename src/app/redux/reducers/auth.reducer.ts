import { createReducer, on } from '@ngrx/store';
import {
  openAuthModalAction,
  closeAuthModalAction,
} from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: null;
  isLoggedIn: boolean;
  isModalOpen: boolean;
  isError: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isModalOpen: false,
  isError: false,
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
  )
);
