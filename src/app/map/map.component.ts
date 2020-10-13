import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { GetActiveUSStatesAction } from './store/map.actions';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { getActiveUSStates } from './store/map.selectors';
import { USState } from './models/USSate';
import { ToggleTweetModalAction } from '../tweetmodal/store/tweetmodal.actions';

const STATE_COLOR = '#fbe637';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;

  constructor(private store$: Store<AppState>) {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 4,
      center: [-98.0, 38.5],
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      this.store$.dispatch(GetActiveUSStatesAction());
      this.store$.pipe(select(getActiveUSStates)).subscribe((usStates) => {
        usStates.forEach((state) => {
          this.addUSState(state);
        });
      });
    });
  }

  addUSState(usState: USState) {
    const state: string = usState.state;
    const lnglat: mapboxgl.LngLatLike = [usState.longitude, usState.latitude];
    const ids = {
      source: state,
      fillLayer: state + '-fill',
      borderLayer: state + '-border',
    };

    this.map.addSource(ids.source, {
      type: 'geojson',
      data: './../../../assets/USA/' + state + '.geo.json', // TODO: Update this to url
    });

    this.map.addLayer({
      id: ids.fillLayer,
      type: 'fill',
      source: state,
      layout: {},
      paint: {
        'fill-color': STATE_COLOR,
        'fill-opacity': 0.5,
      },
    });

    this.map.addLayer({
      id: ids.borderLayer,
      type: 'line',
      source: state,
      layout: {},
      paint: {
        'line-color': STATE_COLOR,
        'line-width': 2,
      },
    });

    this.map.on('click', ids.fillLayer, () => {
      this.map.flyTo({
        center: lnglat,
        essential: true,
        zoom: 6,
      });
      setTimeout(() => this.store$.dispatch(ToggleTweetModalAction()), 500);
    });

    this.map.on('mouseenter', ids.fillLayer, (e) => {
      this.map.getCanvas().style.cursor = 'pointer';
    });

    this.map.on('mouseleave', ids.fillLayer, () => {
      this.map.getCanvas().style.cursor = '';
    });
  }
}
