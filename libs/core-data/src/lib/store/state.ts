import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Project } from './../projects/project';


export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  selectId: (project: Project) => project.id,
  sortComparer: false
});


export interface State extends EntityState<Project> {
  isLoading?: boolean;
  error?: any;
  selectedProjectId: string;
}

export const initialState: State = projectAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedProjectId: null
});
