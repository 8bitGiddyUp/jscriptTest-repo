/*
  option 1
*/
// axios.get('https://swapi.dev/api/planets/')
// .then(({data}) => {
//   console.log(data);
//   for (let planets of data.results) {
//     console.log(planets.name);
//   }
//   return axios.get(data.next);
// })
// .then(({data}) => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
// })
// .catch((err) => {
//   console.log('error', err);
// });

/*
  option 2
*/
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
}


const printPlanets = ({data}) => {
  console.log(data);
  for (let planets of data.results) {
    console.log(planets.name);
  }
  // return fetchNextPlanets(data.next);
  return axios.get(data.next);
}


fetchNextPlanets()
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.catch((err) => {
  console.log('error', err);
});


// fetchNextPlanets()
// .then(({data}) => {
//   console.log(data);
//   for (let planets of data.results) {
//     console.log(planets.name);
//   }
//   return axios.get(data.next);
// })
// .then(({data}) => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
// })
// .catch((err) => {
//   console.log('error', err);
// });