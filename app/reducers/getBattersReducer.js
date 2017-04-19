export const batters = (state=[], action) => {
  switch(action.type) {
    case 'GET_BATTERS':
      return [...action.batters]
    default:
      return state
  }
}
