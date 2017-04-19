export const getPitchers = pitchers => {
  return {
    type: 'GET_PITCHERS',
    pitchers
  }
}

export const getBatters = batters => {
  return {
    type: 'GET_BATTERS',
    batters
  }
}
