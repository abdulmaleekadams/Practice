const scriptURL =
  'https://script.google.com/macros/s/AKfycbxTty_uujUkEDNOl0wYszkHCoTOihexd4bQ1wIzccY7dLJ-8upeR2Z0K-I1SM8dMEyOkw/exec';
const form = document.forms['submit-to-google-sheet'];
let msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Thank You For Subscribing';

      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
