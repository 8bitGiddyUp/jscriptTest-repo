// bulma.io/documentation/components/dropdown

console.log('Hi there!');

const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/',{
    params: {
      apikey: '8c87e13',
      s: searchTerm,
    }
  });

  if (response.data.Error) {
    return [];
  }

  /*
    response.data returns all data; be selective by choosing "Search"
  */
  return response.data.Search;
};






const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

/*
  refactor to be reusable -> aka debounce helper function
*/
// let timeoutID = null;
// const onInput = event => {
//   if (timeoutID) {
//     console.log('clearing timeout...', timeoutID,' -> ', event.target.value);
//     clearTimeout(timeoutID);
//   }
//   /*
//     waits a 1 sec then executes 'fetchData'
//   */
//   timeoutID = setTimeout( () => {
//     console.log('fetching movie...');
//     fetchData(event.target.value);
//   }, 1000)
// };



const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  dropdown.classList.add('is-active');
  for (let movie of movies){
    const option = document.createElement('a');

    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `;

    resultsWrapper.appendChild(option);
  }
};

input.addEventListener('input', debounce(onInput, 1000));