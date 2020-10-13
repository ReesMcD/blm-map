import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  tweetModalReducerWrapper,
  TweetModalState,
} from '../tweetmodal/store/tweetmodal.reducer';
import { mapReducerWrapper, MapState } from '../map/store/map.reducer';

export interface AppState {
  tweetModal: TweetModalState;
  map: MapState;
}

export const reducers: ActionReducerMap<AppState> = {
  tweetModal: tweetModalReducerWrapper,
  map: mapReducerWrapper,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
