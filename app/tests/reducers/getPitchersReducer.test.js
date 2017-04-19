import { pitchers } from '../../reducers/getPitchersReducer.js';
import pitcherData from '../../data/pitchers.js'

const state = [];

describe('pithcers reducer', () => {

  it('pitchers should have an default state', () => {
    expect(pitchers(undefined, {})).toEqual(state);
  });

  it('case "GET_BATTERS" should return an array of pitchers', () => {
    const action = {
      type: 'GET_PITCHERS',
      pitchers: pitcherData
    }

    expect(pitchers(undefined, action)).toEqual(pitcherData);
  });

  it('pitcherData should return an array with the length of 100', () => {
    expect(pitcherData.length).toEqual(200);
  });

});
