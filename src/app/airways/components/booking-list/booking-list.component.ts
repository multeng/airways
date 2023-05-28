import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Booking } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BookingListComponent {
  @Input() bookingList: Booking[] = [];

  @Input() editable = false;

  @ViewChildren('select') selectList: QueryList<ElementRef> = new QueryList();

  get columns() {
    const columns = [
      'selection',
      'flightNumber',
      'flight',
      'tripType',
      'date',
      'passengers',
      'price',
    ];
    if (this.editable) columns.push('actions');
    return columns;
  }

  get selectedItems() {
    const res = this.selectList.filter(
      (elem) =>
        elem.nativeElement.checked &&
        !elem.nativeElement.classList.contains('select-all')
    ).length;
    return res < 0 ? 0 : res;
  }

  get totalPrice() {
    return this.selectList.reduce((acc, elem) => {
      if (
        elem.nativeElement.checked &&
        !elem.nativeElement.classList.contains('select-all')
      ) {
        const number = elem.nativeElement.classList[1].split('-')[1];
        const item = this.bookingList.find(
          (element) => element.flightNumber === number
        );
        const price = item ? item.price : 0;
        return acc + price;
      }
      return acc;
    }, 0);
  }

  edit(item: Booking): void {
    console.log('navigated to edit item:', item);
  }

  remove(item: Booking) {}

  checkAll(e: Event) {
    if (!(e.target instanceof HTMLInputElement)) return;
    const isChecked = e.target.checked;
    this.selectList.forEach((elem) => {
      if (isChecked) {
        elem.nativeElement.checked = true;
      } else {
        elem.nativeElement.checked = false;
      }
    });
  }

  check() {
    if (
      this.selectList.filter((elem) => !elem.nativeElement.checked).length === 1
    ) {
      this.selectList.first.nativeElement.checked = true;
    }

    if (
      this.selectList.filter((elem) => elem.nativeElement.checked).length ===
        1 &&
      this.selectList.first.nativeElement.checked
    ) {
      this.selectList.first.nativeElement.checked = false;
    }
  }
}
