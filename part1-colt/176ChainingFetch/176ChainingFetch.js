/*
  option 1
*/
// fetch("https://swapi.dev/api/planets/")
// .then((response) => {
//   console.log("fetch returned => ", typeof response);
//   if (!response.ok)
//     throw new Error(`status code error: ${response.status}`);

//   return response.json();
// })
// .then((data) => {
//   console.log("response.json returned => ",typeof data);
//   const filmUrl = data.results[0].films[0];
//   return fetch(filmUrl);
// })
// .then((response) => {
//   console.log("fetch(filmUrl) returned => ", typeof response);
//   if (!response.ok)
//     throw new Error(`Status code error: ${response.status}`);

//   return response.json();
// })
// .then((data) => {
//   console.log("response.json() returned => ", typeof data);
// })
// .catch(() => {
//   console.log("something went wrong...  no connection...");
// });

/*
  option 2
*/
const checkStatusAndParse = (response) => {
  if (!response.ok)
    throw new Error(`error terminated: ${response.status}`);
  
  return response.json();
};

const printPlanets = (data) => {
  console.log("loaded 10 more planets...")
  for (let planet of data.results) {
    console.log(planet.name);
  }

  /*
    way 1 to return a resolved Promise:
    const p = new Promise((resolve, reject) => {
      resolve(data); -> manually resolve the promise with "data"
    })
    return p; -> an artificial promise is returned
  */

  /*
    way 2 to return a resolved Promise:
    return Promise.resolve(data);
  */

  /*
    way 3 to return a resolved Promise:
    return data;
  */
  return Promise.resolve(data);
};

const nextPlanets = (nextData) => {
  const nextUrl = nextData.next;
  return fetch(nextUrl);
};




/*
  type 1
*/
// fetch("https://swapi.dev/api/planets/")
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(nextPlanets)
// .then(checkStatusAndParse)
// .then(printPlanets)
// .then(nextPlanets)
// .catch(() => {
//   console.log("something went wrong...  no connection...");
// });


const fetchNextPlanets = (url="https://swapi.dev/api/planets/") => {
  return fetch(url);
};

const fetchPrintPlanets = (data) => {
  console.log("loaded 10 more planets...")
  for (let planet of data.results) {
    console.log(planet.name);
  }
  /*
    cannot use "data"; must use "data.next" because "fetchNextPlanets" expects
    the "next url"; both of these work:

      return Promise.resolve(data.next);
      return data.next;

    but these fails since "fetchNextPlanets" is expecting an "url":
      return Promise.resolve(data);
      return data;
  */
  return Promise.resolve(data.next);
};


fetchNextPlanets()
.then(checkStatusAndParse)
.then(fetchPrintPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(fetchPrintPlanets)
.then(fetchNextPlanets)
.catch(() => {
  console.log("something went wrong...  no connection...");
});