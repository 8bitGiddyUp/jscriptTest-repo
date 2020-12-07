const prices = [1,2,3,4,5];

const sorted1 = prices.sort((a, b) => {
  console.log(a, b);
  return b - a;
});

let books = ['abc','xyz','lmn','abc', 'ijk','efg'];
const ascSortedBooks = books.sort((b1, b2) => (
  b1 < b2 ? -1 : 1
));


books = ['abc','xyz','lmn','abc', 'ijk','efg'];
const dscSortedBooks = books.sort((b1, b2) => (
  b1 > b2 ? -1 : 1
));