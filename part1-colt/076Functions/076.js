function multiplyBy(num) {
  return function(x) {
    console.log("hi");
    return x * num;
  }
}

function multiply_By() {
  const f = function() {
    console.log("blash");
  }

  return f;
}


// nested function with return
const double = multiplyBy(2);
let dbl = double(10);

// anonymous function
setTimeout(() => {
  let a = 99;
  alert(a);
}, 2000);

// event listener
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert("why you click me????");
});