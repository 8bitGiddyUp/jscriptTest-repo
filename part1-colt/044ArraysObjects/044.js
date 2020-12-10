console.log('044');

let lotto = [23,12,34,23,56];
let myCollection = [12, 'dog', true, null, NaN];

let newArray = new Array(1,2,3,4, null, 'abc', NaN, 'string', true);

if (newArray[newArray.length] === undefined) {
  console.log('array out of index');
}
else {
  console.log('index in range');
}

lotto.pop();
console.log(lotto);

lotto.push(99);
console.log(lotto);

lotto.shift();
console.log(lotto);

lotto.unshift(00);
console.log(lotto);

lotto.unshift(1,2,3);
console.log(lotto);

lotto.concat(lotto);
console.log(lotto);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(2, 1, 'a', 'b', 'c');
console.log(months);

months.splice(2, 3, 1,2,3);
console.log(months);