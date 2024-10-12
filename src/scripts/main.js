'use strict';

const successMessage = `<div class="message">Promise was resolved!</div>`;
const errorMessage = `<div class="message error-message">Promise was rejected!</div>`;

const successHandler = () => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', successMessage);
};
const errorHandler = () => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', errorMessage);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
