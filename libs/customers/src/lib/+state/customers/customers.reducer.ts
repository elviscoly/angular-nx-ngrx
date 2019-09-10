import { CustomersAction, CustomersActionTypes } from './customers.actions';

export const CUSTOMERS_FEATURE_KEY = 'customers';

/**
 * Interface for the 'Customers' data used in
 *  - CustomersState, and
 *  - customersReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CustomersState {
  list: Entity[]; // list of Customers; analogous to a sql normalized table
  selectedId?: string | number; // which Customers record has been selected
  loaded: boolean; // has the Customers list been loaded
  error?: any; // last none error (if any)
}

export interface CustomersPartialState {
  readonly [CUSTOMERS_FEATURE_KEY]: CustomersState;
}

export const initialState: CustomersState = {
  list: [],
  loaded: false
};

export function customersReducer(
  state: CustomersState = initialState,
  action: CustomersAction
): CustomersState {
  switch (action.type) {
    case CustomersActionTypes.CustomersLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
