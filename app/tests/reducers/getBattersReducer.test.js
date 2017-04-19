import { batters } from '../../reducers/getBattersReducer.js';
import batterData from '../../data/batters.js'

const state = [];

describe('batters reducer', () => {

  it('batters should have an default state', () => {
    expect(batters(undefined, {})).toEqual(state);
  });

  it('case "GET_BATTERS" should return an array of batters', () => {
    const action = {
      type: 'GET_BATTERS',
      batters: batterData
    }

    expect(batters(undefined, action)).toEqual(batterData);
  });

  it('batterData should return an array with the length of 100', () => {
    expect(batterData.length).toEqual(100);
  });

});
