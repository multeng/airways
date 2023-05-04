import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import User from '../../models/user.model';
import { TuiButtonModule, TuiDropdownModule } from '@taiga-ui/core';
import { TuiCheckboxModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from "@angular/common";

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
    AsyncPipe
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

  users: Observable<User[]> = new Observable<User[]>();
  result: Observable<any> = new Observable();
  open = false;

  onClick(): void {
    // this.result = this.api.getUsers();
    // this.result = this.api.getAirports('berlin')
    // this.result = this.api.generateFlights(10);
    // this.result = this.api.checkEmail('mail@mail.ru')
    // this.result = this.api.registerNewUser(this.user)
    this.result = this.api.login('mdsaail@mail.ru', 'passwordddd');
    // this.result = this.api.getFlights(new Date(), new Date(), false, 1);
    this.open = !this.open;
  }
  onActiveZone(active: any): void {
    this.open = active && this.open;
  }

  constructor(public api: ApiService) {}

  // ngOnInit() {
  //   this.users = this.api.getUsers();
  // }
}
