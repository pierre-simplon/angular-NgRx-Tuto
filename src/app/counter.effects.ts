import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CounterService } from './counter.service';
import { counterActions } from './index';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}

  saveCounterReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.reset),
      mergeMap(() =>
        this.counterService.counterReset().pipe(
          map((resp) => ({
            type: '[Counter Component] Reset in back-end Successed',
            payload: resp,
          }))
        )
      )
    )
  );
}
