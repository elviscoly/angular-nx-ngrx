import { createReducer, on, Action } from '@ngrx/store';
import { initialState, State, projectAdapter } from './state';
import * as projectActions from './actions'


const projectReducer = createReducer(
  initialState,
  on(projectActions.load, state => ({ ...state, isLoading: true, error: null})),
  on(projectActions.loadSuccess, (state, { projects }) => projectAdapter.addAll(projects, {...state, isLoading: false, error: null})),
  on(projectActions.loadFailure, (state, { error }) => ({...state, isLoading: false, error}))
);

export function reducer(state: State | undefined, action: Action) {
  return projectReducer(state, action);
}
