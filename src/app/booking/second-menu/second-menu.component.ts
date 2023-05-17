import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiModeModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiDataListWrapperModule,
  TuiInputDateRangeModule,
  TuiInputModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiDay, TuiDayRange, TuiLetModule } from '@taiga-ui/cdk';

@Component({
  selector: 'app-second-menu',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiDropdownModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiMoneyModule,
    TuiModeModule,
    TuiInputDateRangeModule,
    TuiLetModule,
    TuiInputModule,
    TuiDataListModule,
  ],
  templateUrl: './second-menu.component.html',
  styleUrls: ['./second-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SecondMenuComponent {
  isOpen = false;

  secondMenuForm = new FormGroup({
    from: new FormControl(``, Validators.required),
    to: new FormControl(``, Validators.required),
    dates: new FormControl(
      new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20))
    ),
    passengers: new FormControl(``, Validators.required),
  });

  accounts = [
    { one: `Common` },
    { two: `Common` },
    { three: `Common` },
    { four: `Common` },
  ];

  onClick(): void {
    this.isOpen = !this.isOpen;
  }

  onObscured(obscured: unknown): void {
    if (obscured) {
      this.isOpen = false;
    }
  }

  onActiveZone(active: boolean): void {
    this.isOpen = active && this.isOpen;
  }
}
