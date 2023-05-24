import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import SecondMenuComponent from '../../components/second-menu/second-menu.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule, SecondMenuComponent],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export default class SecondPageComponent {}
