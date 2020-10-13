import { createReducer, on, Action } from '@ngrx/store';
import * as TweetModalActions from './tweetmodal.actions';

export interface TweetModalState {
  visible: boolean;
  usState: string;
  modalTitle: string;
  videos: string[];
}

const initialState: TweetModalState = {
  visible: false,
  usState: '',
  modalTitle: '',
  videos: [],
};

const tweetModalReducer = createReducer(
  initialState,
  on(TweetModalActions.ToggleTweetModalAction, (state) => ({
    ...state,
    visible: !state.visible,
  }))
);

export function tweetModalReducerWrapper(
  state: TweetModalState | undefined,
  action: Action
) {
  return tweetModalReducer(state, action);
}
