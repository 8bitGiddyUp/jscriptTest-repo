const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]



/*





*/

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');

  for (let game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);

    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    
    ulParent.appendChild(gameLi);
  }// end for let game

  return ulParent;
}



const isWinner = ({homeTeam:hT, awayTeam:aT}, targetTeam) => {
  /*
    adds class='win' or class='loss' in the "li" tags such as:

      <li> .... </li> becomes <li class='win'> ... </li>
  */
  const target = hT.team === targetTeam ? hT : aT;
  return target.isWinner;
}



const getScoreLine = ({homeTeam:hT, awayTeam:aT}) => {
  const {team: hTeam, points: hPoints} = hT;
  const {team: aTeam, points: aPoints} = aT;
  const teamNames = `${aTeam} @ ${hTeam}`;

  const scoreLine = aPoints > hPoints ?
    `<b>${aPoints}</b> - ${hPoints}` : `${aPoints} - <b>${hPoints}</b>`;

  /*
    innerText doesn't interpret the tags; use innerHTML
      gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  */
  return `${teamNames} ${scoreLine}`;
}




const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const gsChart = makeChart(warriorsGames, "Golden State");
const hrChart = makeChart(warriorsGames, "Houston");

gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);