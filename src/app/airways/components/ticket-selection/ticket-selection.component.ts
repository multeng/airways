import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import {
  TuiCarouselModule,
  TuiIslandModule,
  TuiMarkerIconModule,
} from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import SharedModule from '../../../shared/shared.module';
import { TypeOfFlight } from '../../../../constants';

@Component({
  selector: 'app-ticket-selection',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiLoaderModule,
    TuiCarouselModule,
    TuiMarkerIconModule,
    TuiMoneyModule,
  ],
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TicketSelectionComponent {
  @Input() direction = '';

  @Input() from = 'Dublin';

  @Input() to = 'Warsaw Modlin';

  setImage(row: boolean) {
    if (row) return this.direction === TypeOfFlight.oneWay.toString()
      ? 'assets/svg/iconToWay.svg'
      : 'assets/svg/iconBackWay.svg';
    return this.direction === TypeOfFlight.oneWay.toString()
      ? 'assets/svg/airplane_takeoff_24px.svg'
      : 'assets/svg/airplane_takeoff1_24px.svg';
  }
}
