import { Action } from '@ngrx/store';
import { Entity } from './customers.reducer';

export enum CustomersActionTypes {
  LoadCustomers = '[Customers] Load Customers',
  CustomersLoaded = '[Customers] Customers Loaded',
  CustomersLoadError = '[Customers] Customers Load Error'
}

export class LoadCustomers implements Action {
  readonly type = CustomersActionTypes.LoadCustomers;
}

export class CustomersLoadError implements Action {
  readonly type = CustomersActionTypes.CustomersLoadError;
  constructor(public payload: any) {}
}

export class CustomersLoaded implements Action {
  readonly type = CustomersActionTypes.CustomersLoaded;
  constructor(public payload: Entity[]) {}
}

// export type

export type CustomersAction =
  | LoadCustomers
  | CustomersLoaded
  | CustomersLoadError;

export const fromCustomersActions = {
  LoadCustomers,
  CustomersLoaded,
  CustomersLoadError
};
