const numbers = [1,2,3,4,5];
const words = ['abc','def','ghi','jkl'];

let numX2 = numbers.map(function(num, i) {
  let nx2 = num *2;
  console.log(i, nx2);
  return nx2;
});
console.log(numX2);

numX2.forEach(function(n, i) {
  console.log(i, n + i);
});

// let n = numbers.forEach();

let s = "abcd".split('').join('.');
console.log(s);

const isEven = num => {num % 2 === 0;}

let t = ['a','bc','de'].map(x => x.toUpperCase());
console.log(t);

let movies = ['the fantastic mr. fox',
  'mr. and mrs. smith',
  'mrs. doubtfire',
  'mr. deeds'
];

let movie = movies.find(m => m.includes('mrs.'));
 movie = movies.find(m => {
   console.log(m);
   return m.indexOf('mrs') === 0;
 });