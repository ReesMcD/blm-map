import { createAction } from '@ngrx/store';

export enum TweetModalActionTypes {
  TOGGLE_TWEET_MODAL = 'toggle tweet modal',
}

export const ToggleTweetModalAction = createAction(
  TweetModalActionTypes.TOGGLE_TWEET_MODAL
);
