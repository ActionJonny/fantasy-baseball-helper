const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });

nightmare
  .viewport(1500, 1500)
  .goto('http://www.baseball-reference.com/leagues/MLB/2016-standard-batting.shtml')
  .evaluate(() => {
    let statArr = []
    let arr = []
    let arrayLength = document.querySelectorAll('.full_table.non_qual').length
    for(var i = 0; i < arrayLength; i++) {
      let text = document.querySelectorAll('.full_table.non_qual')[i].innerText
      statArr.push(text.split('\t', 35))
      let object = {
        name: statArr[i][1],
        age: statArr[i][2],
        games: statArr[i][5],
        pa: statArr[i][6],
        ab: statArr[i][7],
        runs: statArr[i][8],
        hits: statArr[i][9],
        doubles: statArr[i][10],
        triples: statArr[i][11],
        homers: statArr[i][12],
        rbi: statArr[i][13],
        sb: statArr[i][14],
        cs: statArr[i][15],
        bb: statArr[i][16],
        so: statArr[i][17],
        ba: statArr[i][18],
        obp: statArr[i][19],
        slg: statArr[i][20],
        ops: statArr[i][21],
        opsplus: statArr[i][22],
        tb: statArr[i][23],
        gdp: statArr[i][24],
        hbp: statArr[i][25],
        sachit: statArr[i][26],
        sacfly: statArr[i][27],
        ibb: statArr[i][28]
      }
      arr.push(object)
    }
    return arr
  })
  .end()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });
