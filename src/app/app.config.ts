import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { reduce } from 'rxjs';
import { cartCountReducer } from './state/cartcount/cartcount.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideStore(),
    provideState({name:'counter',reducer:cartCountReducer})
  ]
};
