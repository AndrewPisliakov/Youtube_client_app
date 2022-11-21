import { createReducer, on } from "@ngrx/store";
import { IData, IItem } from "src/app/shared/models/models.component";
import { addAdminObject, CARDS_LOAD_SUCCESS } from "../actions/youtube.actions";

export interface ResponseCard {
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    kind: string,
    snippet: {
        channelId: string,
        channelTitle: string,
        description: string,
        liveBroadcastContent: string,
        publishTime: string,
        publishedAt: string,
        thumbnails: {
            default: {
                height: number,
                url: string,
                width: number
            },
            high: {
                height: number,
                url: string,
                width: number
            },
            medium: {
                height: number,
                url: string,
                width: number
            },

        },
        title: string
    }
}

export interface ResponseCards {
    etag: string,
    items: ResponseCard[],
    kind: string,
    nextPageToken: string,
    pageInfo: {
        resultsPerPage: number,
        totalResults: number
    },
    regionCode: string
}


//========================================
export interface Card {
    adminCard: AdminCard | null,
    youtubeCard: IItem | null;
}

export interface AdminCard {
    title: string,
    discription: string,
    img: string,
    link: string
}

export interface CardAdminState {
    adminCard: AdminCard | null,
    youtubeCard: IItem | null;
}

export interface AdminState {
    myCards: CardAdminState[],  // =========================== to do 
}

//==========================================

export interface CardAdaptive {
    id: string,
    title: string,
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    commentCount: string,
    publishedAt: string
    favoriteCount: string,
    url: string,
    description?: string
};
//==========================================

export interface GlobalState {
    admin: AdminState
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
                img: action.img,
            },
            youtubeCard: null
        }]
    })
    ),
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

    on(CARDS_LOAD_SUCCESS, (state, response) => {
        //console.log(response);
        const responceCards = response.payload.items;
        const responceCardsForState = responceCards.map(elem => {
            return {
                adminCard: null,
                youtubeCard: elem
            }
        });
        return {
            ...state,
            myCards: [...responceCardsForState]
        }
    }),
);




// ======================================================================================

