// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', () => {
//   console.log("IT WORKED");
// });
// firstReq.addEventListener('error', () => {
//   console.log("IT FAILED");
// });

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("request sent!!!");

let rjson = null;

fetch('https://swapi.dev/api/planetssssssssssssssssssss/')
.then((response) => {
  if (response.ok){
    response.json()
    .then((data) => { // data is not Promise
      console.log(data);
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  }
  else {
    console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR", response.status);
    throw new Error(`Status code error: ${response.status}`);
  }
})
.catch((err) => {
  console.log("ERROR TERMINATED --", err);
});