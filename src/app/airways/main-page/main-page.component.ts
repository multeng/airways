import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TripType } from '../../shared/models/main-page.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  searchFlightsForm = new FormGroup({
    tripType: new FormGroup({
      type: new FormControl(TripType.round),
    }),
    location: new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.searchFlightsForm);
  }
}
