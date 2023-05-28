import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { TUI_DATE_FORMAT } from '@taiga-ui/cdk';
import DateRangeComponent from '../../airways/components/date-range/date-range.component';
import DateComponent from '../../airways/components/date/date.component';

@Injectable({
  providedIn: 'root',
})
export default class CalendarFactoryService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  createOneWayCalendar(injectedValue: string) {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(DateComponent);
    const injector = Injector.create({
      providers: [{ provide: TUI_DATE_FORMAT, useValue: injectedValue }],
      parent: this.injector,
    });
    return factory.create(injector);
  }

  createRangeCalendar(injectedValue: string) {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(DateRangeComponent);
    const injector = Injector.create({
      providers: [{ provide: TUI_DATE_FORMAT, useValue: injectedValue }],
      parent: this.injector,
    });
    return factory.create(injector);
  }
}
