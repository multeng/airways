import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TUI_DATE_FORMAT } from '@taiga-ui/cdk';
import DateRangeComponent from 'src/app/airways/components/date-range/date-range.component';
import { DateComponent } from 'src/app/airways/components/date/date.component';

@Injectable({
  providedIn: 'root',
})
export class CalendarFactoryService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  createOneWayCalendar(injectedValue: string): any {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(DateComponent);
    const injector = Injector.create({
      providers: [{ provide: TUI_DATE_FORMAT, useValue: injectedValue }],
      parent: this.injector,
    });
    const componentRef = factory.create(injector);

    return componentRef;
  }

  createRangeCalendar(injectedValue: string): any {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(DateRangeComponent);
    const injector = Injector.create({
      providers: [{ provide: TUI_DATE_FORMAT, useValue: injectedValue }],
      parent: this.injector,
    });
    const componentRef = factory.create(injector);

    return componentRef;
  }
}
