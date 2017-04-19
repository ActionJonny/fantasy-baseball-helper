export const pitchers = (state=[], action) => {
  switch(action.type) {
    case 'GET_PITCHERS':
      return [...action.pitchers]
    default:
      return state
  }
}
