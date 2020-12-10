// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// https://swapi.dev/api/planets/

// this gets busy in XMLHttpRequest; it is better with 'fetch' which provides
// promises

const firstReq = new XMLHttpRequest();
let data = null;
let filmURL = null;
let filmData = null;

firstReq.addEventListener('load', function () {
  console.log("1st request worked!!!");
  data = JSON.parse(this.responseText);
  filmURL = data.results[0].films[2];
  filmReq = new XMLHttpRequest();

  filmReq.addEventListener('load', function(){
    console.log("2nd request worked!!!");
    console.log(this);
    filmData = JSON.parse(this.responseText);
  });

  filmReq.addEventListener('error', function(e){
    console.log("2nd request errored!!!");
  });

  filmReq.open('get', filmURL);
  filmReq.send();
  console.log('2nd request sent');

  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
});

firstReq.addEventListener('error', () => {
  console.log("1st request errored!!!");
});

firstReq.open('gET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('1st request sent');