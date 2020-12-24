// 4.5
// convert to an arrow function
const greet = () => 'hello world';

const bill = (products, tax) => {
  let total = 0;
  return total;
};
console.log(greet(), bill());

// 4.7 callback function
let people = ['mario', 'luigi', 'ryu'];
people.forEach((p, i) => {
  console.log(p, i);
});

//4.8 callback function in action
const ul = document.querySelector('.people');
// let html=null;
let html='';
people.forEach(person => {
  // html += `<li style="color: purple">${person}</li>`;
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;