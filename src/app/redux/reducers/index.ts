import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { adminReducer, AdminState } from './youtube.redux';


export interface State {
  admin: AdminState,
}

export const reducers: ActionReducerMap<State> = {
  admin: adminReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
