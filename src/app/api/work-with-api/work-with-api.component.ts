import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import User from '../../models/user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-work-with-api',
  templateUrl: './work-with-api.component.html',
  styleUrls: ['./work-with-api.component.scss'],
})
export class WorkWithApiComponent implements OnInit {
  testValue = new FormControl(true);

  user = new User(
    0,
    'John',
    'mail@mail.ru',
    'Doe',
    new Date(),
    'male',
    '+37599999999',
    'password'
  );

  users: Observable<User[]> = new Observable<User[]>();
  open = false;

  onClick(): void {
    this.api.getUsers();
    this.open = !this.open;
  }
  onActiveZone(active: any): void {
    this.open = active && this.open;
  }

  constructor(public api: ApiService) {}

  ngOnInit() {
    this.users = this.api.getUsers();
  }
}
