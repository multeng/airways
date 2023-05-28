import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAddedBookings } from '../../../redux/selectors/cart.selectors';
import { Booking } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartComponent implements OnInit {
  bookingListSubscription = new Subscription();

  bookingList: Booking[] = [];

  promo = new FormGroup({
    promo: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.bookingListSubscription = this.store
      .select(selectAddedBookings)
      .subscribe((data) => {
        this.bookingList = data;
      });
  }
}
