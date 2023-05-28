import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import SecondMenuComponent from '../../components/second-menu/second-menu.component';
import TicketSelectionComponent from '../../components/ticket-selection/ticket-selection.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [
    CommonModule,
    SecondMenuComponent,
    TicketSelectionComponent,
    TicketSelectionComponent,
    TicketSelectionComponent,
  ],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export default class SecondPageComponent {}
