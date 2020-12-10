function getData() {
  const data = axios.get("https://swapi.dev/api/planets/")
  .then((data) => {
    console.log("WHAT AM I? ", data);
  });
  console.log("I GO FIRST", data);
}