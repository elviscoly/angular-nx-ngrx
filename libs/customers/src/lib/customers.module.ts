import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CUSTOMERS_FEATURE_KEY,
  initialState as customersInitialState,
  customersReducer
} from './+state/customers/customers.reducer';
import { CustomersEffects } from './+state/customers/customers.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE_KEY, customersReducer, {
      initialState: customersInitialState
    }),
    EffectsModule.forFeature([CustomersEffects])
  ]
})
export class CustomersModule {}
