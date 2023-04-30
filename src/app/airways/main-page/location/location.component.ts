import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import {
  Subject,
  Observable,
  filter,
  switchMap,
  startWith,
  of,
  delay,
} from 'rxjs';

const mockData = ['magadan', 'sochi', 'omsk'];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  readonly search$ = new Subject<string | null>();

  readonly items$: Observable<string[] | null> = this.search$.pipe(
    filter((value) => value !== null),
    switchMap((search) =>
      this.serverRequest(search).pipe(startWith<string[] | null>(null))
    ),
    startWith(mockData)
  );

  form: FormGroup = new FormGroup({});

  constructor(private formGroupRoot: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  extractValueFromEvent(event: Event): string | null {
    return (event.target as HTMLInputElement)?.value || null;
  }

  private serverRequest(searchQuery: string | null): Observable<string[]> {
    const result = mockData.filter((user) =>
      TUI_DEFAULT_MATCHER(user, searchQuery || '')
    );

    return of(result);
  }
}
