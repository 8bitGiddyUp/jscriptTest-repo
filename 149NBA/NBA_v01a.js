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



const body = document.querySelector('body');

function initScoreboard() {
  /*
    select the body node
  */
  const mainScript = document.querySelector('script.main-script');

  const homeSection = document.createElement('section');
  homeSection.classList.add('home-section');

  const awaySection = document.createElement('section');
  awaySection.classList.add('away-section');

  body.insertBefore(homeSection, mainScript);
  body.insertBefore(awaySection, mainScript);
}



function addTeamHeading() {
  const sectionHome = document.querySelector('section.home-section');
  const sectionAway = document.querySelector('section.away-section');

  const homeH2 = document.createElement('h2');
  homeH2.innerText = "Golden State";
  body.insertBefore(homeH2, sectionHome);

  const awayH2 = document.createElement('h2');
  awayH2.innerText = "Houston Rocket";
  body.insertBefore(awayH2, sectionAway);
}


function 

initScoreboard();
addTeamHeading();


for (let game of warriorsGames) {
  const {homeTeam, awayTeam} = game;
  const htName = homeTeam.team;
  const atName = awayTeam.team;

  const htPoints = homeTeam.points;
  const atPoints = awayTeam.points;
  const nameBold =
    htPoints > atPoints ? `${atName} - <b>${htName}</b>` : `<b>${atName}</b> - ${htName}`;

  const htWinLoss = homeTeam.isWinner;
  const atWinLoss = awayTeam.isWinner;

  const targetTeam = htName === "Golden State" ? homeTeam : awayTeam;
  const targetColor = targetTeam.isWinner ? "win" : "loss";

  const scoreBold = 
    homeTeam.isWinner ? `${atPoints} - <b>${htPoints}</b>` : `<b>${atPoints}</b> - ${htPoints}`

  const teamNames = `${htName} - ${atName}`;
  const teamPoints = `${htPoints} - ${atPoints}`;

  const newRow = `${nameBold} ${scoreBold}`;

  const rowLi = document.createElement('li');
  rowLi.classList.add(targetColor);
  rowLi.innerHTML = newRow;
  sectionHome.append(rowLi);
}// end let game