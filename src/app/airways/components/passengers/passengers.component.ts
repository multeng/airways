import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PassengersComponent {
  secondMenuForm = new FormGroup({
    passengers: new FormGroup({
      adults: new FormControl(0),
      child: new FormControl(0),
      infants: new FormControl(0),
    }),
  });

  adults = 0;

  child = 0;

  infants = 0;

  isOpen = false;

  constructor() {}

  click() {
    this.isOpen = !this.isOpen;
  }
}
