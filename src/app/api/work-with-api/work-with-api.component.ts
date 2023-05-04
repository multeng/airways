import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import User from '../../models/user.model';
import {
  TuiButtonModule,
  TuiDropdownModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiCheckboxModule, TuiTextAreaModule } from '@taiga-ui/kit';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';

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
export class WorkWithApiComponent {
  user = new User(
    'Johdasdn',
    'mdsaail@mail.ru',
    'Ddsaoe',
    new Date(),
    'male',
    '+37599999999',
    'passwordddd'
  );
  arr = [
    'users',
    'airports',
    'gen-flights',
    'email',
    'registration',
    'login',
    'flights',
  ];
  testForm = new FormGroup({
    testValue2: new FormControl(),
  });
  users: Observable<User[]> = new Observable<User[]>();
  result: Observable<any> = new Observable();
  open = false;

  onClick(button: string): void {
    switch (button) {
      case 'users':
        this.result = this.api.getUsers();
        break;
      case 'airports':
        this.result = this.api.getAirports('berlin');
        break;
      case 'gen-flights':
        this.result = this.api.generateFlights(10);
        break;
      case 'email':
        this.result = this.api.checkEmail('mail@mail.ru');
        break;
      case 'registration':
        this.result = this.api.registerNewUser(this.user);
        break;
      case 'login':
        this.result = this.api.login('mdsaail@mail.ru', 'passwordddd');
        break;
      case 'flights':
        this.result = this.api.getFlights(new Date(), new Date(), false, 10);
        break;
    }
    this.open = !this.open;
  }
  onActiveZone(active: any): void {
    this.open = active && this.open;
  }

  constructor(public api: ApiService) {}
}
