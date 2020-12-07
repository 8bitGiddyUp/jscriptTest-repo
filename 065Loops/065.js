
for (let i = 0; i < 10; i++) {
  console.log(`${i*i} hello`);
}

let subreddits = ['a', 'b', 'c'];
// let sub = null;
for (let sub of subreddits) {
  console.log(sub);
}
// console.log(sub); -> this sub is not accessible

const movieReviews = {
  arrival: 9.5,
  alien: 9,
  amelie: 8,
  'in bruges': 9,
  amedeus: 10,
  'kill bill': 9,
  'little miss sunshine': 7,
  coraline: 7.5
};

// for (let movieReview of movieReviews) {
//   console.log(movieReview);
// }

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
for (let value of ratings) {
  console.log(value);
}

