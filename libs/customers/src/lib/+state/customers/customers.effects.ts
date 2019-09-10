import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { CustomersPartialState } from './customers.reducer';
import {
  LoadCustomers,
  CustomersLoaded,
  CustomersLoadError,
  CustomersActionTypes
} from './customers.actions';

@Injectable()
export class CustomersEffects {
  @Effect() loadCustomers$ = this.dataPersistence.fetch(
    CustomersActionTypes.LoadCustomers,
    {
      run: (action: LoadCustomers, state: CustomersPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CustomersLoaded([]);
      },
      // Load error if there is any
      onError: (action: LoadCustomers, error) => {
        console.error('Error', error);
        return new CustomersLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CustomersPartialState>
  ) {}
}
