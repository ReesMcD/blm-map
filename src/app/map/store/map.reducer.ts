import { createReducer, on, Action } from '@ngrx/store';
import * as MapActions from './map.actions';
import { USState } from '../models/USSate';

export interface MapState {
  style: string;
  lng: number;
  lat: number;
  zoom: number;
  usStates: USState[];
}

const initialState: MapState = {
  style: 'mapbox://styles/mapbox/dark-v9',
  lng: -98.0,
  lat: 38.5,
  zoom: 4,
  usStates: [],
};

const mapReducer = createReducer(
  initialState,
  on(MapActions.GetActiveUSStatesAction, (state) => state),
  on(MapActions.GetActiveUSStatesSuccessAction, (state, { usStates }) => ({
    ...state,
    usStates,
  }))
);

export function mapReducerWrapper(state: MapState | undefined, action: Action) {
  return mapReducer(state, action);
}
