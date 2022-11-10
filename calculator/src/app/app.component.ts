import { increase, decrease,clear, countSelector, updateAtSelector } from './reducers/counter';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updateAt$ = this.store.select(updateAtSelector);

  constructor(private store: Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}
