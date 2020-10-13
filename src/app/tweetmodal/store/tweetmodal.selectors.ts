import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TweetModalState } from './tweetmodal.reducer';
import { AppState } from 'src/app/reducers';

export const tweetModalKey = 'tweetModal';
export const tweetModalSelector = createFeatureSelector<
  AppState,
  TweetModalState
>(tweetModalKey);

export const getVisible = createSelector(
  tweetModalSelector,
  (state) => state.visible
);
