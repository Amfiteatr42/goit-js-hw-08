import throttle from 'lodash/throttle';
import { save, load } from './utilities.js';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');
const inputValues = {};
// console.log(JSON.parse(localStorage.feedback).email);
// console.log(localStorage.getItem('feedback'));

if (localStorage.feedback) {
  inputEmail.value = JSON.parse(localStorage.feedback).email;
  inputMessage.value = JSON.parse(localStorage.feedback).message;
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  const formData = new FormData(form);
  formData.forEach((value, x) => {
    inputValues[x] = value;

    save('feedback', inputValues);
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.feedback));
  localStorage.removeItem('feedback');
  inputEmail.value = '';
  inputMessage.value = '';
}
