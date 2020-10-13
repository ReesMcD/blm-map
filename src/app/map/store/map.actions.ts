import { createAction, props } from '@ngrx/store';
import { USState } from '../models/USSate';

export enum MapActionTypes {
  GET_ACTIVE_US_STATES = 'Map: get active US states',
  GET_GEOJSON_SUCCESS = 'Map: get active US state success',
  GET_GEOJSON_FAILURE = 'Map: get active US state failure',
  SELECT_US_STATE = 'select US state',
}

export const GetActiveUSStatesAction = createAction(
  MapActionTypes.GET_ACTIVE_US_STATES
);
export const GetActiveUSStatesSuccessAction = createAction(
  MapActionTypes.GET_GEOJSON_SUCCESS,
  props<{ usStates: USState[] }>()
);
export const GetActiveUSStatesFailureAction = createAction(
  MapActionTypes.GET_GEOJSON_FAILURE
);
export const SelectUSStateAction = createAction(MapActionTypes.SELECT_US_STATE);
