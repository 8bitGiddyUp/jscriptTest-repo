const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// when 'submit' is clicked, it refreshes the form page--reload
form.addEventListener('submit', function(e) {
  // to prevent refreshing of form page
  e.preventDefault();

  alert('submitted a form');

  console.log(e);
  console.log('cc', creditCardInput.value);
  console.log('terms', termsCheckbox.checked);
  console.log('veggie', veggieSelect.value);
});

const formData = {};

// option 1: every item in the form can be actively monitored
// and changed in realtime
// creditCardInput.addEventListener('input', (e) => {
//   console.log("cc changed", e);
//   formData['cc'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log("term check box", e);
//   formData['agreeToTerm'] = e.target.checked;
// });

// veggieSelect.addEventListener('input', (e) => {
//   console.log("veggie", e);
//   formData['veggie'] = e.target.value;
// });


// option 2: consolidating the above 3 addEventListeners
// first add the "name" attributes in the "input" forms in
// index.html
/* <input name="creditCard" type="text" placeholder="credit card" id="cc">
<input name="agreeToTerms" type="checkbox" id="terms">
<select name="selectedVeggie" id="veggie"> */
// for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//   input.addEventListener('input', (e) => {
//     console.log(e.target.name);
//     formData[e.target.name] = e.target.value;
//   });
// }

// to take care of the checkbox issue
// "change" can be used instead of "input"; the difference is that "input"
// reacts to each typed character; the "change" reacts only when an
// "enter" is pressed
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}
