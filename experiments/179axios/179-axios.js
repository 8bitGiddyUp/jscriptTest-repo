const axios = require("axios");

// const swapi = axios.get("https://swapi.dev/api/planets/");
// swapi
//   .then((res) => {
//     //console.log(res.data); //.data.results[0].name);
//     res.data.results.forEach((result) => {
//       console.log(result.name);
//     });
//     console.log(res.data.next);
//     return axios.get(res.data.next);
//   })
//   .then((rs) => {
//     rs.data.results.forEach((r) => {
//       console.log(r.name);
//     });
//   })
//   .catch((e) => {
//     console.log("ERROR OCCURRED...");
//   });

/*
  using functions along with axios
*/
const fetchNextPlanets = (url = "http://swapi.dev/api/planets/") => {
  console.log("url: ", url);
  return axios.get(url);
};

const printPlanets = (rs) => {
  // console.log("data results: ", rs.data.results);
  for (let planet of rs.data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(rs.data.next);
};

const printPlanetsDest = ({ data: planets }) => {
  planets.results.forEach((planet) => {
    console.log("planet.name: ", planet.name);
  });

  return Promise.resolve(planets.next);
};

fetchNextPlanets()
  .then(printPlanetsDest)
  .then(fetchNextPlanets)
  .then(printPlanetsDest)
  .catch((e) => {
    console.log("ERROR: ");
  });

// axios.get("http://swapi.dev/api/planets/").then(({ data }) => {
//   console.log("1 ++++++++++++++++++++++++++++++++++++++++");
//   // console.log("data1: ", data);
//   console.log("1 ---------------------------------------");
// });

// const swapi = axios.get("http://swapi.dev/api/planets/");
// console.log("swapi: ", swapi);
// swapi.then(({ headers: h }) => {
//   console.log("2 ++++++++++++++++++++++++++++++++++++++++");
//   console.log("headers: ", h);
//   console.log("2 ---------------------------------------");
// });

// swapi.then((res) => {
//   console.log("res: ");
// });
