import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminState } from "../reducers/youtube.redux";

export const featureSelector = createFeatureSelector<AdminState>('admin')
console.log(featureSelector);

export const adminSelector = createSelector(
    featureSelector,
    state => state.myCards
);