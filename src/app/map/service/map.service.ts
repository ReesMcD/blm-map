import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetModalService } from 'src/app/tweetmodal/service/tweetmodal.service';
import { Observable, of } from 'rxjs';
import { USState } from '../models/USSate';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  // map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/dark-v9';
  // lng = -98.0;
  // lat = 38.5;
  // zoom = 4;
  // hoveredStateId = null;
  constructor(private httpClient: HttpClient) {}

  // buildMap() {
  //   this.map = new mapboxgl.Map({
  //     container: 'map',
  //     style: this.style,
  //     zoom: this.zoom,
  //     center: [this.lng, this.lat],
  //   });
  //   this.map.addControl(new mapboxgl.NavigationControl());

  //   this.map.on('load', () => {
  //     this.buildStateBoundries();
  //   });
  // }

  // buildStateBoundries() {
  //   this.addAllStates();
  // }

  // addAllStates() {
  //   this.httpClient
  //     .get('./../../../assets/state_data.json')
  //     .subscribe(
  //       (data: { state: string; longitude: number; latitude: number }[]) => {
  //         data.forEach((state) => {
  //           this.addStateSources(state.state, [
  //             state.longitude,
  //             state.latitude,
  //           ]);
  //           this.addStateLayer(state.state);
  //         });
  //       }
  //     );
  // }

  // addStateSources(state: string, lnglat: mapboxgl.LngLatLike) {
  //   this.map.addSource(state, {
  //     type: 'geojson',
  //     data: './../../../assets/USA/' + state + '.geo.json',
  //   });

  //   this.map.on('click', state, () => {
  //     this.onStateClick(state, lnglat);
  //   });

  //   this.map.on('mouseenter', state, () => {
  //     this.map.getCanvas().style.cursor = 'pointer';
  //   });

  //   // Change it back to a pointer when it leaves.
  //   this.map.on('mouseleave', state, () => {
  //     this.map.getCanvas().style.cursor = '';
  //   });
  // }

  // addStateLayer(state: string) {
  //   this.map.addLayer({
  //     id: state + '-fill',
  //     type: 'fill',
  //     source: state,
  //     layout: {},
  //     paint: {
  //       'fill-color': '#627BC1',
  //       'fill-opacity': [
  //         'case',
  //         ['boolean', ['feature-state', 'hover'], false],
  //         1,
  //         0.5,
  //       ],
  //     },
  //   });

  //   this.map.addLayer({
  //     id: state + '-border',
  //     type: 'line',
  //     source: state,
  //     layout: {},
  //     paint: {
  //       'line-color': '#627BC1',
  //       'line-width': 2,
  //     },
  //   });

  //   // When the user moves their mouse over the state-fill layer, we'll update the
  //   // feature state for the feature under the mouse.
  //   this.map.on('mousemove', state + '-fill', (e) => {
  //     this.map.setFeatureState(
  //       { source: state, id: state + '-fill' },
  //       { hover: true }
  //     );
  //   });

  //   // When the mouse leaves the state-fill layer, update the feature state of the
  //   // previously hovered feature.
  //   this.map.on('mouseleave', state + '-fill', (e) => {
  //     this.map.setFeatureState({ source: state, id: state }, { hover: false });
  //   });
  // }

  // onStateClick(state: string, lnglat: mapboxgl.LngLatLike) {
  //   console.log('click on ' + state);
  //   this.map.flyTo({
  //     center: lnglat,
  //     essential: true,
  //     zoom: 6,
  //   });

  //   this.modal.toggle();
  // }

  // getStateList() {
  //   console.log('getting states');
  // }

  // getMappedTweets(state: string) {
  //   console.log('geting tweets');
  // }

  getActiveStates(): Observable<USState[]> {
    return this.httpClient.get<USState[]>(
      './../../../assets/active_states.json'
    );
  }
}
