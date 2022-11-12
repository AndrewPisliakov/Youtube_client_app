import { createAction, createReducer, on, props } from "@ngrx/store";

export const addAdminObject = createAction('[COUNTER] addAdminObject', props<{
    discription: string,
    img: string,
    link: string,
    title: string
}>()
);

export interface Card {
    adminCard: AdminCard,
    youtubeCard: any;
}

export interface AdminCard {
    title: string,
    discription: string,
    img: string,
    link: string
}

export interface AdminState {
    myCards: Card[],
}

export const initialState: AdminState = {
    myCards: []
}

export const adminReducer = createReducer(
    initialState,
    on(addAdminObject, (state, action) => ({
        ...state,
        myCards: [...state.myCards, {
            adminCard: {
                link: action.link,
                title: action.title,
                discription: action.discription,
                img: action.img
            },
            youtubeCard: {}
        }]
    })
    ),
);

/* export const adminReducer = createReducer(
    initialState,
    on(addAdminObject, (state, action) => {
        console.log(state, "Action", action);

        return ({
            ...state,
            myCards: [ ...state.myCards, {
                adminCard: action,
                youtubeCard: {}
            }]
        });
    }),
); */

