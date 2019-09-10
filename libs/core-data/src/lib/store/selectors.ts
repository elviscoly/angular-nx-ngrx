import { projectAdapter, State } from './state';
import { Project } from '../projects/project';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProjectState = createFeatureSelector<State>('project');

export const selectAllProjectItems: (
  state: object
) => Project[] = projectAdapter.getSelectors(selectProjectState).selectAll;


const selectSelectedProjectId = createSelector(
  selectProjectState,
  (state: State): string => state.selectedProjectId
);


export const selectCurrentProject = createSelector(
  selectAllProjectItems,
  selectSelectedProjectId,
  (allProjects: Project[], selectedProjectId: string) => {
    if (allProjects && selectedProjectId) {
      return allProjects.find(p => p.id === selectedProjectId);
    } else {
      return null;
    }
  }
);


export const selectProjectError = createSelector(
  selectProjectState,
  (state: State): any => state.error
);

export const selectProjectIsLoading = createSelector(
  selectProjectState,
  (state: State): boolean => state.isLoading
);
