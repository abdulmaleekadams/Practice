# Subscribe Form to Google Sheet

This is a simple HTML and JavaScript-based subscription form that allows users to subscribe to a mailing list. The submitted data is sent to a Google Sheet using Google Apps Script. The form is designed for collecting email addresses from users who want to receive updates or newsletters.

## Table of Contents

- [HTML Structure](#html-structure)
- [JavaScript Code](#javascript-code)
- [CSS Styling](#css-styling)
- [Usage](#usage)

## HTML Structure

The HTML structure of the subscription form is as follows:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags and title -->
  </head>
  <body>
    <div class="hero">
      <p>Coming Soon!</p>
      <h1>Our Brand New<br/>Website Is on Its Way</h1>
      <p>Subscribe for more details</p>
      <form name="submit-to-google-sheet">
        <input type="email" name="Email" placeholder="Your email address" required>
        <button type="submit" title="Subscribe"><i class="fa-regular fa-paper-plane"></i></button>
      </form>
      <span id="msg"></span>
    </div>
  </body>
</html>
```

## JavaScript Code

The JavaScript code handles the form submission and sends the data to a Google Sheet using a Google Apps Script URL. It also displays a success message to the user.

```javascript
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
```

## CSS Styling

The CSS styling is responsible for the appearance of the subscription form and the hero section.

```css
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

.hero {
  /* Hero section styles */
}

form {
  /* Form styles */
}

/* Add more CSS styles as needed */
```

## Usage

To use this subscription form:

1. Ensure you have the necessary HTML, JavaScript, and CSS files in your project.

2. Customize the form and the hero section by modifying the HTML and CSS as needed.

3. Set the `scriptURL` variable in the JavaScript code to the URL of your Google Apps Script endpoint.

4. Deploy the Google Apps Script as a web app and obtain the script URL.

5. Host your website and include these files.

6. Users can enter their email addresses and click the "Subscribe" button to submit the form. Upon successful submission, a "Thank You" message will be displayed.

Remember to secure your Google Apps Script endpoint and handle user data responsibly.
