import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CUSTOMERS_FEATURE_KEY, CustomersState } from './customers.reducer';

// Lookup the 'Customers' feature state managed by NgRx
const getCustomersState = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE_KEY
);

const getLoaded = createSelector(
  getCustomersState,
  (state: CustomersState) => state.loaded
);
const getError = createSelector(
  getCustomersState,
  (state: CustomersState) => state.error
);

const getAllCustomers = createSelector(
  getCustomersState,
  getLoaded,
  (state: CustomersState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCustomersState,
  (state: CustomersState) => state.selectedId
);
const getSelectedCustomers = createSelector(
  getAllCustomers,
  getSelectedId,
  (customers, id) => {
    const result = customers.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const customersQuery = {
  getLoaded,
  getError,
  getAllCustomers,
  getSelectedCustomers
};
