import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, merge, mergeMap } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Injectable()
export class AppEffects {

  loadCardsEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Header Component] loadCardsReducer'),
    mergeMap(() => this.dataService.getDataWithStatistic()
      .pipe(
        map(cards => ({ type: '[Header Component] CARDS_LOAD_SUCCESS', payload: cards }))
      )
    )
  ));

  constructor(private actions$: Actions, private dataService: DataService) { }
}
