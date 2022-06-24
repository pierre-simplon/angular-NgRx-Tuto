import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CounterService } from './counter.service';

@Injectable()
export class CounterEffects {
  saveCounterEnded$ = createEffect(() => {});

  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}
}
