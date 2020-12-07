// const btn = document.querySelector('#clicker');
// btn.onclick = alert("btn.onclick activated");
// btn.onclick = function(){
//   console.log("I appear because you clicked me");
// }

// btn.ondblclick = function(){
//   console.log("double clicked me and I appear because you clicked me");
// }

// METHOD 2: "onclick" is being used, so another event handler cannot be added
//   to "onclick" again.
// const btn = document.querySelector('button');
// btn.onclick = function(){
//   console.log("you clicked meeeeeeeeeeeee");
// }

// // this second event overwrites the prior event
// btn.onclick = function(){
//   console.log("SECOND EVENT you clicked meeeeeeeeeeeee");
// }

// addEventListener can help more than one event can be added to an object
// event properties are without "on":
// i.e. onclick -> click
//      onmouseover -> mouseover
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('addEventListener activated!!!');
});

btn.addEventListener('mouseover', function(){
  console.log("moussssse over me!!!");
});

// testing scroll event
function countme () {
  let count = 0;
  function c (){
    console.log(`stop scrolling ${count}`);
    count++;
  }
  return c;
}

let cnt = countme();
window.addEventListener('scroll', function(){
  cnt();
});
