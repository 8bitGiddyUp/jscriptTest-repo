let filmURL = null;




// fetch ('https://swapi.dev/api/planets/')
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`* 1st status code error: ${response.status}`);
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log(`* 1st data`);
//   for(let planet of data.results) {
//     console.log(planet.name);
//   }
//   nextURL = data.next;
//   console.log(nextURL);
//   return fetch(nextURL);
// })
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`** 2nd status code error: ${response.status}`);
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log(`** 2nd data`);
//   for(let planet of data.results) {
//     console.log(planet.name);
//   }
//   nextURL = data.next;
//   console.log(nextURL);
//   return fetch(nextURL);
// })
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`*** 3rd status code error: ${response.status}`);
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log(`*** 3rd data`);
//   for(let planet of data.results) {
//     console.log(planet.name);
//   }
//   nextURL = data.next;
//   console.log(nextURL);
//   return fetch(nextURL);
// })
// .catch((err) => {
//   console.log(' error');
//   console.log(err);
// });




// const checkStatus = (response) => {
//   if(!response.ok) {
//     throw new Error(`${stage} status code error: ${response.status}`);
//   }
//   return response.json();
// }


// const getData = (data) => {
//   console.log(` data`);
//   for(let planet of data.results) {
//     console.log(planet.name);
//   }
//   nextURL = data.next;
//   console.log(nextURL);
//   return fetch(nextURL);
// }


// fetch ('https://swapi.dev/api/planets/')
// .then(checkStatus)
// .then(getData)
// .then(checkStatus)
// .then(getData)
// .then(checkStatus)
// .then(getData)
// .catch((err) => {
//   console.log(' error');
//   console.log(err);
// });



/*

  to make 'fetch' to process like this:

  fetch (URL)
  .then(checkStatus)
  .then(printPlanets)
  .then(next10Planets)
  .catch(error)

  in order for '.then' to work, the prior .then must return "Promises"

*/
const checkStatus = (response) => {
  if(!response.ok) {
    throw new Error(`${stage} status code error: ${response.status}`);
  }
  return response.json(); // returns promise to the next '.then'
}


const printPlanets = (data) => {
  console.log(`* 1st data`);
  for(let planet of data.results) {
    console.log(planet.name);
  }

  // at this point, printPlanets does not return a promise; to return a promise,
  // the following must be used
  // option 1:
  //  const p = new Promise((resolve, reject) => {
  //    resolve(data); // for the next '.then' which is expecting "data"
  // });
  // return p;
  //
  // option 2:
  //  return Promise.resolve(data);

  // use option 2
  return Promise.resolve(data.next); // or Promise.resolve(data.next)
}


// const fetchNextPlanets = (dt) => {
//   const url = dt.next; // or remove this
//   return fetch(url);
// }

//            OR

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
};


fetchNextPlanets()
.then(checkStatus)
.then(printPlanets)
.then(fetchNextPlanets)

.then(checkStatus)
.then(printPlanets)
.then(fetchNextPlanets)

.then(checkStatus)
.then(printPlanets)
.then(fetchNextPlanets)
.catch((err) => {
  console.log(' error');
  console.log(err);
});
