import { Injectable } from '@angular/core';
import { MapService } from '../service/map.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MapActions from './map.actions';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class MapEffects {
  usStates$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(MapActions.GetActiveUSStatesAction),
      switchMap(() =>
        this.mapService.getActiveStates().pipe(
          map((usStates) =>
            MapActions.GetActiveUSStatesSuccessAction({ usStates })
          ),
          catchError(() => of(MapActions.GetActiveUSStatesFailureAction))
        )
      )
    )
  );

  constructor(private actions$: Actions, private mapService: MapService) {}
}
