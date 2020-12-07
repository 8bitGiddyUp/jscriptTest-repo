/*
  without "await"
*/
function getPlanets() {
  return axios.get("https://swapi.dev/api/planets/");
}

getPlanets()
.then(response => {
  console.log("without await, response data: ", response.data);
});


/*
  with "await"
*/
async function awaitGetPlanets() {
  const response = await axios.get("https://swapi.dev/api/planets/");
  console.log("with await, response.data: ", response.data);
}

awaitGetPlanets();