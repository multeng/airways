import { TestBed } from '@angular/core/testing';

import { CalendarFactoryService } from './calendar-factory.service';

describe('CalendarFactoryService', () => {
  let service: CalendarFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
