import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dateFormats = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/DD/MM', 'YYYY/MM/DD'];

  currencies = ['RUB', 'USD', 'EUR'];

  headerSettingsForm = new FormGroup({
    dateFormat: new FormControl('DD/MM/YYYY'),
    currency: new FormControl('RUB'),
  });
}
