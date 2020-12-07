// parallel async
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;

  console.log("prom1 = ", prom1);
  console.log("poke1 = ", poke1);
  console.log("prom3 = ", prom3);
  console.log("poke3 = ", poke3);

  // console.log(poke1.data);
  // console.log(poke2.data);
  // console.log(poke3.data);
}

get3Pokemon();