const input = document.querySelector('#username');
input.addEventListener('keydown', function(e) {
  console.log('key down', e);
});

input.addEventListener('keyup', function(e) {
  console.log('key down', e);
});

input.addEventListener('keypress', function(e) {
  console.log('key down', e);
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
  console.log(e);
  if (e.key === 'Enter') {
    // add a new item to list
    console.log(this.value);
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
  }
});