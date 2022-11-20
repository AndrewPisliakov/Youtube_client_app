import { createAction, props } from "@ngrx/store";
import { ResponseCards } from "../reducers/youtube.redux";


export const addAdminObject = createAction('[COUNTER] addAdminObject', props<{
    discription: string,
    img: string,
    link: string,
    title: string
}>()
);

export const loadCardsReducer = createAction('[Header Component] loadCardsReducer');

export const CARDS_LOAD_SUCCESS = createAction('[Header Component] CARDS_LOAD_SUCCESS', props<{
    payload: ResponseCards
}>());