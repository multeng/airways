import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiCheckboxModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';
import User from '../../shared/models/user.model';
import ApiService from '../api.service';
import {
  buttonsNames,
  mockAirport,
  mockDataUser,
  mockEmail,
  mockLogin,
} from './mock';

@Component({
  imports: [
    TuiButtonModule,
    TuiDropdownModule,
    HttpClientModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    FormsModule,
    TuiButtonModule,
    TuiDropdownModule,
    TuiCheckboxModule,
    JsonPipe,
    AsyncPipe,
    NgForOf,
    TuiTextfieldControllerModule,
  ],
  selector: 'app-work-with-api',
  templateUrl: './work-with-api.component.html',
  styleUrls: ['./work-with-api.component.scss'],
  standalone: true,
})
export default class WorkWithApiComponent {
  user = new User(...mockDataUser);

  buttonsTitles = buttonsNames;

  users: Observable<User[]> = new Observable<User[]>();

  result: Observable<unknown> = new Observable();

  constructor(public api: ApiService) {}

  onClick(button: string): void {
    switch (button) {
      case 'users':
        this.result = this.api.getUsers();
        break;
      case 'airports':
        this.result = this.api.getAirports(mockAirport);
        break;
      case 'gen-flights':
        this.result = this.api.generateFlights(10);
        break;
      case 'email':
        this.result = this.api.checkEmail(mockEmail);
        break;
      case 'registration':
        this.result = this.api.registerNewUser(this.user);
        break;
      case 'login':
        this.result = this.api.login(...mockLogin);
        break;
      default:
        this.result = this.api.getFlights(new Date(), new Date(), false, 10);
        break;
    }
  }
}
