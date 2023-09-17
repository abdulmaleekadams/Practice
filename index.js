localStorage.setItem(
  'adminCredentials',
  JSON.stringify({ usrName: 'Adams', passWrd: 'testing' })
);

let form = document.querySelector('form'),
  inputUsername = document.getElementById('username'),
  inputPassword = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { usrName, passWrd } = JSON.parse(
    localStorage.getItem('adminCredentials')
    );
    
  inputUsername.value === usrName && inputPassword.value === passWrd
    ? alert('Succesfully Logged in')
    : inputUsername.value !== usrName
    ? alert('Username not found')
    : alert('Incorrect password');

  window.location = 'https://facebook.com'
});
