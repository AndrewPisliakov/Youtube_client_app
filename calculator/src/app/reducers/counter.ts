import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');
export const changeUpdateAt = createAction(
    '[COUNTER] change update at',
    props<{updateAt: number}>());

export interface CounterState {
    count: number,
    updateAt?: number
}

export const initialState: CounterState = {
    count: 0
} 

export const counterReducer = createReducer(
    initialState,
    on(increase, state => ({
        ...state,
        count: state.count + 1
    })),
    on(decrease, state => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, state => ({
        ...state,
        count: 0
    })),
    on(changeUpdateAt, (state, action) => ({
        ...state,
        updateAt: action.updateAt
    }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const countSelector = createSelector(
    featureSelector,
    state => state.count
);
export const updateAtSelector = createSelector(
    featureSelector,
    state => state.updateAt
);
