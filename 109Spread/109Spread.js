console.log("hello js!");

let min = Math.min(1,2,3);
const nums = [1,2,3];
let max = Math.max(nums);
max = Math.max(...nums);

const feline = {
  legs: 4,
  family: 'felidae'
};

const canine = {
  family: "caninae",
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
};

// combine cat and dog
const dogCat = {
  ...canine,
  ...feline
};

const catDog = {
  ...feline,
  ...canine
};


const one2345 = [1,2,3,4,5];
const [one, two, three] = one2345;

const response = [
  'http',
  '200',
  'app'
];

function parse([, status, ]) {
  console.log(`status: ${status}`);
};

parse(response);