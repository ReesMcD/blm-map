import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MapState } from './map.reducer';
import { AppState } from 'src/app/reducers';

export const mapKey = 'map';
export const mapSelector = createFeatureSelector<AppState, MapState>(mapKey);

export const getActiveUSStates = createSelector(
  mapSelector,
  (state) => state.usStates
);
