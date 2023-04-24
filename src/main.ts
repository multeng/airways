import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { EventPluginsModule } from '@tinkoff/ng-event-plugins';
import { metaReducers, reducers } from './app/redux';
import appRoutes from './app/app.routes';
import AppComponent from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      EventPluginsModule,
      RouterModule.forRoot(appRoutes),
      StoreModule.forRoot(reducers, {
        metaReducers,
      }),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      EffectsModule.forRoot([])
    ),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    provideAnimations(),
  ],
}).catch((err) => {
  console.error(err);
});
