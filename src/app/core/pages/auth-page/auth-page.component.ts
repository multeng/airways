import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TuiBreakpointService } from '@taiga-ui/core';
import { selectIsOpenModal } from '../../../redux/selectors/auth.selector';
import { closeAuthModalAction } from '../../../redux/actions/auth.actions';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthPageComponent {
  isLogin = true;

  isOpen$ = this.store.select(selectIsOpenModal);

  switchPage(state: boolean) {
    this.isLogin = state;
  }

  constructor(
    @Inject(TuiBreakpointService)
    readonly breakpoint$: TuiBreakpointService,
    private store: Store
  ) {}

  closeModal() {
    this.store.dispatch(closeAuthModalAction());
  }

  fIcon = `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.5 9.05471C18.5 4.05424 14.4703 0 9.5 0C4.52975 0 0.5 4.05424 0.5 9.05471C0.5 13.5745 3.791 17.3201 8.09375 17.9992V11.6723H5.8085V9.05395H8.09375V7.06041C8.09375 4.79145 9.43775 3.53737 11.4935 3.53737C12.4775 3.53737 13.508 3.71469 13.508 3.71469V5.9429H12.3725C11.2542 5.9429 10.9055 6.64087 10.9055 7.35695V9.05471H13.4015L13.0025 11.673H10.9055V18C15.209 17.3201 18.5 13.5738 18.5 9.05471Z" fill="#1877F2"/>
  </svg>`;

  gIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.8249 7.2373H17.1V7.19995H9V10.7999H14.0864C13.3443 12.8956 11.3503 14.3999 9 14.3999C6.01785 14.3999 3.6 11.9821 3.6 8.99994C3.6 6.01781 6.01785 3.59998 9 3.59998C10.3765 3.59998 11.6289 4.11927 12.5824 4.96752L15.1281 2.42188C13.5207 0.923844 11.3706 0 9 0C4.02975 0 0 4.02972 0 8.99994C0 13.9702 4.02975 17.9999 9 17.9999C13.9703 17.9999 18 13.9702 18 8.99994C18 8.39649 17.9379 7.80745 17.8249 7.2373Z" fill="#FFC107"/>
  <path d="M1.03809 4.81092L3.99504 6.97945C4.79514 4.99857 6.73284 3.59998 9.00039 3.59998C10.3769 3.59998 11.6293 4.11927 12.5828 4.96752L15.1285 2.42188C13.5211 0.923844 11.371 0 9.00039 0C5.54349 0 2.54559 1.95164 1.03809 4.81092Z" fill="#FF3D00"/>
  <path d="M8.99956 18.0001C11.3243 18.0001 13.4366 17.1105 15.0336 15.6637L12.2481 13.3066C11.3445 13.9911 10.2213 14.4001 8.99956 14.4001C6.65866 14.4001 4.671 12.9075 3.9222 10.8245L0.987305 13.0857C2.4768 16.0003 5.50171 18.0001 8.99956 18.0001Z" fill="#4CAF50"/>
  <path d="M17.825 7.23755H17.1V7.2002H9V10.8002H14.0864C13.73 11.8068 13.0824 12.6749 12.2472 13.3071C12.2476 13.3067 12.2481 13.3067 12.2485 13.3062L15.034 15.6633C14.8369 15.8424 18 13.5002 18 9.00018C18 8.39674 17.9379 7.80769 17.825 7.23755Z" fill="#1976D2"/>
  </svg>`;
}
