import * as MapActions from './map.actions';

describe('Map', () => {
  it('should create an instance', () => {
    expect(new MapActions.LoadMaps()).toBeTruthy();
  });
});
