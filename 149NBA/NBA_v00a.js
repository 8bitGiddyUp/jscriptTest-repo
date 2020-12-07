const warriorsGames = [
  {
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
];// end const warriorsGames


/*
  creates the "section" to hold scores
*/
const body = document.querySelector('body');
const section = document.createElement('section');
const h1Home = document.createElement('h1');
const h1Away = document.createElement('h1');

/*
  add class values to h1Home and h1Away
*/
h1Home.classList.add('team-name');
h1Away.classList.add('team-name');

/*
  add labels
*/
h1Home.innerText = "Golden State Warriors";
h1Away.innerText = "Houston Rockets";

/*
  adds the home tags
*/
body.appendChild(section);
section.appendChild(h1Home);
section.appendChild(h1Away);

/*
  from 'warriorsGames' extract 'awayTeam' and 'homeTeam'
*/
const len = warriorsGames.length;
console.log(len);

/*
  in 'section', add the home score board before the second team
*/
const awayT = document.querySelectorAll('h1')[1];


for (wGame of warriorsGames) {
  const {homeTeam, awayTeam} = wGame;

  const hTName = homeTeam.team;
  const aTName = awayTeam.team;
  const hTPoints = homeTeam.points;
  const aTPoints = awayTeam.points;

  const teams = `${hTName} - ${aTName}`;
  const scores = `${hTPoints} : ${aTPoints}`;
  const rowInfo = teams + scores;
  console.log(rowInfo);

  let homeLi = document.createElement('li');
  
  const winLossHometeam = hTPoints > aTPoints ? 'win' : 'loss';
  homeLi.classList.add(winLossHometeam);
  
  homeLi.innerText = rowInfo;
  section.insertBefore(homeLi, awayT);
  // section.appendChild(homeLi);

  let awayLi = document.createElement('li');
  const winLossAwayteam = hTPoints < aTPoints ? 'win' : 'loss';
  awayLi.classList.add(winLossAwayteam);
  section.appendChild(awayLi);
  awayLi.innerText = rowInfo;
}// end for wGame