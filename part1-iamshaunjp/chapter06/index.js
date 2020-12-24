// event bubbling up to parents from the event target

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something to do';
  ul.prepend(li);
});

ul.addEventListener('click', (e) => {
  console.log(e.target.textContent);
  console.log(e);
  if (e.target.tagName === 'LI'){
    e.target.remove();
  }
});