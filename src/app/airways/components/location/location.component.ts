import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Subject, Observable, filter, switchMap, map } from 'rxjs';
import { TuiTextfieldComponent } from '@taiga-ui/core';
import ApiService from '../../../api/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LocationComponent implements OnInit {
  readonly search$ = new Subject<string | null>();

  @ViewChild('from') fromInput = {} as TuiTextfieldComponent;

  @ViewChild('to') toInput = {} as TuiTextfieldComponent;

  readonly items$: Observable<string[] | null> = this.search$.pipe(
    filter((value) => value !== null),
    switchMap((search) => this.serverRequest(search))
  );

  form: FormGroup = new FormGroup({});

  constructor(
    private formGroupRoot: FormGroupDirective,
    private apiService: ApiService
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

  switchLocation() {
    const fromValue = this.fromInput.host.value;
    const toValue = this.toInput.host.value;
    this.fromInput.host.onValueChange(toValue);
    this.toInput.host.onValueChange(fromValue);
  }

  private serverRequest(searchQuery: string | null): Observable<string[]> {
    const search = searchQuery ?? '';
    return this.apiService.getAirports(search).pipe(
      map((data) => {
        return data.map((elem) => elem.name);
      })
    );
  }
}
