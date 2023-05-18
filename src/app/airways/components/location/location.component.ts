import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import { Subject, Observable, filter, switchMap, startWith, map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export default class LocationComponent implements OnInit {
  readonly search$ = new Subject<string | null>();

  readonly items$: Observable<string[] | null> = this.search$.pipe(
    filter((value) => value !== null),
    switchMap((search) => this.serverRequest(search))
  );

  form: FormGroup = new FormGroup({});

  constructor(
    private formGroupRoot: FormGroupDirective,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.form = this.formGroupRoot.control;
    this.search$.next(null);
  }

  focus() {
    this.search$.next('');
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  extractValueFromEvent(event: Event): string | null {
    return (event.target as HTMLInputElement)?.value || null;
  }

  private serverRequest(searchQuery: string | null): Observable<string[]> {
    const search = searchQuery ?? '';
    return this.httpService.fetch(search).pipe(
      map((data) => {
        return data.map((elem) => elem.name);
      })
    );
  }
}
