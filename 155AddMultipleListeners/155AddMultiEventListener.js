const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];


/*
  needs an access to 'box' in the for-loop
*/
/*
  option 1
*/
//  const changeColor = function(box) {
//   console.log(`clicked a color... ${box.style.backgroundColor}`);
// }



/*
  option 2
*/
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function() {
  console.log(this.innerText);
});

const changeColor = function() {
  /*
    here 'this' refers to the box object which invoked "changeColor"
  */
  h1.style.color = this.style.backgroundColor;
};


const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);

  /*
    option 1
  */
  // box.addEventListener('click', function () {
  //   changeColor(box);
  // });


  /*
    option 2
  */
  box.addEventListener('click', changeColor);
}