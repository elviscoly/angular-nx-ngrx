import { Project } from '../projects/project';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Project Component] Load');

export const loadFailure = createAction('[Project Component] Load Failure', props<{error: string}>());

export const loadSuccess = createAction('[Project Component] Load Success', props<{projects: Project[]}>());

export const createProjectFailure = createAction('[Project Component] Create Project Failure ', props<{error: string}>());

export const createProjectSuccess = createAction('[Project Component] Create Project Success', props<{project: Project}>());
