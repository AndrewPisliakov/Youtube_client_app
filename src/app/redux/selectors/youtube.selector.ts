import { concatAll } from 'rxjs/operators';
import { CardAdaptive } from 'src/app/redux/reducers/youtube.redux';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminState, GlobalState } from "../reducers/youtube.redux";

export const featureSelector = createFeatureSelector<AdminState>('admin')

export const adminSelector = createSelector(
    featureSelector,
    (state) => state.myCards
);

export const cardAdaptiveSelector = createSelector(
    featureSelector,
    (state) => {
        return state.myCards.map(card => {
            
            return {
                url: card.youtubeCard.snippet.thumbnails.medium.url,
                id: card.youtubeCard.id,
                title: card.youtubeCard.snippet.title,
                viewCount: card.youtubeCard.statistics.viewCount,
                likeCount: card.youtubeCard.statistics.likeCount,
                dislikeCount: card.youtubeCard.statistics.dislikeCount,
                favoriteCount: card.youtubeCard.statistics.favoriteCount,
                commentCount: card.youtubeCard.statistics.commentCount,
                publishedAt: card.youtubeCard.snippet.publishedAt
            };
        })
    }
);

//============================
