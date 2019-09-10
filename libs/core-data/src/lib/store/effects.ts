import { ProjectsService } from '../projects/projects.service';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import * as projectActions from './actions';
export class ProjectStoreEffect {

  constructor(
    // private actions$: Actions,
    private router: Router,
    private projectService: ProjectsService
  ) {}

  // loadRequestEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(projectActions.load),
  //     concatMap(_ =>
  //       this.projectService.projects().pipe(
  //         map(projects =>
  //           projectActions.loadSuccess({
  //             projects
  //           }),
  //           ),
  //           catchError(error => of(projectActions.loadFailure({ error })))
  //       )
  //       )
  //     )
  //     );

}
