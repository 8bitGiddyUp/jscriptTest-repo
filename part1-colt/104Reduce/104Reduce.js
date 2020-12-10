const nums = [2,3,4];

const grades = [87, 64,96,92,88,99,73,70,64];
const maxGrade = grades.reduce((max, currentGrade) => 
  max > currentGrade ? max : currentGrade);

const minGrade = grades.reduce((min, currentGrade) =>
  min < currentGrade ? min : currentGrade
, 3);