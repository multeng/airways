import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TuiRootModule,
    RouterModule,
    TuiDialogModule,
    TuiAlertModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'airways';
}
