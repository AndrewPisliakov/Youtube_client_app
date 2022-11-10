import { clear, decrease, increase, changeUpdateAt } from './reducers/counter';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

@Injectable()
export class AppEffects {
  updateAt$ = createEffect(
    () => this.actions$.pipe(
      ofType(increase, decrease, clear),
      map( () => changeUpdateAt( {updateAt: Date.now()}))
    )
  );
  constructor(private actions$: Actions) {}

}
