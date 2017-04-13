const Nightmare = require('nightmare');

const nightmare = Nightmare();

export const pitcherData = () => {
  return dispatch => {
    nightmare
      .viewport(1500, 1500)
      .goto('http://www.baseball-reference.com/leagues/MLB/2016-standard-pitching.shtml')
      .evaluate(() => {
        let pitchers = []
        let statArr = []
        let arrayLength = document.querySelectorAll('.full_table.non_qual').length
        for(var i = 0; i < arrayLength; i++) {
          let text = document.querySelectorAll('.full_table.non_qual')[i].innerText
          statArr.push(text.split('\t', 35))
          let object = {
            name: statArr[i][1],
            age: statArr[i][2],
            wins: statArr[i][5],
            losses: statArr[i][6],
            era: statArr[i][8],
            gamesPlayed: statArr[i][9],
            gamesStarted: statArr[i][10],
            completeGames: statArr[i][12],
            shutout: statArr[i][13],
            saves: statArr[i][14],
            inningPitched: statArr[i][15],
            fip: statArr[i][28],
            whip: statArr[i][29],
            hitsNine: statArr[i][30],
            homerunsNine: statArr[i][31],
            walksNine: statArr[i][32],
            strikeoutsNine: statArr[i][33],
            strikeoutsAndWalksNine: statArr[i][34]
          }
          pitchers.push(object)
        }
        return pitchers
      })
      .end()
      .then((result) => {
        dispatch(getPitchers(result))
      })
      .catch((error) => {
        console.error('Search failed:', error);
      });
  }
}


export const getPitchers = pitchers => {
  return {
    type: 'GET_PITCHERS',
    pitchers
  }
}
