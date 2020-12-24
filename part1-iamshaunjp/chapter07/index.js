// 7.2 form listener
// do not attach "addEventListener" to submit
// add it to the form
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  // when 'submit' is pressed, the page is refreshed;
  // to prevent the refresh, use:
  //   e.preventDefault();
  e.preventDefault();

  // option 1:
  // console.log(username.value);

  // option 2:
  // since in index.html had "id=username", this can be access with
  //   form.username
  console.log(form.username.value);
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good username
    feedback.textContent = "VAILD USERNAME";
  }
  else {
    // feedback bad username
    feedback.textContent = "INVALID USERNAME";
  }
});


// live feedback
form.username.addEventListener('keyup', e => {
  console.log(e.target.value, form.username.value);
  // better to use e.target.value
  if (usernamePattern.test(e.target.value)) {
    // console.log('passed');
    form.username.setAttribute('class', 'success');
  }
  else {
    // console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});