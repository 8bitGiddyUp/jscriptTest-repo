const autoCompleteConfig = {
  renderOption(movie) {
    /*
      to handle missing image due to Poster = "NA"
    */
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return  `
      <img src="${imgSrc}" />
      (${movie.Year})
      ${movie.Title}
    `;
  },
  inputValue(movie){
    return movie.Title;
  },
  fetchData: async function (searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '8c87e13',
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  },
  async getchData(searchTerm) {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '8c87e13',
        s: searchTerm
      }
    });

    if (response.data.Error) {
      return [];
    }

    return response.data.Search;
  },
};

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#left-autocomplete'),
  onOptionSelect(movie) {
    /*
      hides the tutorial box
    */
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
  },
});

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#right-autocomplete'),
  onOptionSelect(movie) {
    /*
      hides the tutorial box
    */
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
  },
});

/*
  to design the data comparison info
*/
let leftMovie = null;
let rightMovie = null;

const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '8c87e13',
      i: movie.imdbID,
    }
  });

  // console.log("response=", response);
  // console.log("response.data=", response.data);
  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === 'left') {
    leftMovie = response.data;
  }
  else {
    rightMovie = response.data;
  }

  /*
    if both data are available, make the comparison
  */
 if (leftMovie && rightMovie) {
   runComparison();
 }
};

const runComparison = () => {
  // console.log("making left vs right comparisons");
  const leftSideStats = document.querySelectorAll('#left-summary .notification');
  const rightSideStats = document.querySelectorAll('#right-summary .notification');

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];
    const leftSideValue = leftStat.dataset.value;
    const rightSideValue = rightStat.dataset.value;

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove('is-primary');
      leftStat.classList.add('is-warning');
    }
    else {
      rightStat.classList.remove('is-primary');
      rightStat.classList.add('is-warning');
    }
  });
};


const movieTemplate = movieDetail => {
  // '$4,534'
  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, '')
  );
  const metascore = parseInt(
    movieDetail.Metascore
  );
  const imdbRating = parseFloat(
    movieDetail.imdbRating
  );
  const imdbVotes = parseInt(
    movieDetail.imdbVotes.replace(/,/g, '')
  );

  const awards = movieDetail.Awards.split(' ')
    .reduce((prev, word) => {
      const value = parseInt(word);
      if (isNaN(value)) {
        return prev;
      }
      else {
        return prev + value;
      }
    }, 0);

  // console.log(awards, dollars, metascore, imdbRating, imdbVotes);

  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetail.Poster}" alt="">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetail.Title}</h1>
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </div>
    </div>
  </article>
  <article data-value=${awards} class="notification is-primary">
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
  <article data-value=${dollars} class="notification is-primary">
    <p class="title">${movieDetail.BoxOffice}</p>
    <p class="subtitle">Box Office</p>
  </article>
  <article data-value=${metascore} class="notification is-primary">
    <p class="title">${movieDetail.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
  <article data-value=${imdbRating} class="notification is-primary">
    <p class="title">${movieDetail.imdbRating}</p>
    <p class="subtitle">IMDB Rating</p>
  </article>
  <article data-value=${imdbVotes} class="notification is-primary">
    <p class="title">${movieDetail.imdbVotes}</p>
    <p class="subtitle">IMDB Voting</p>
  </article>
`;
};