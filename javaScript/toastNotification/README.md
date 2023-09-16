# Toast Notification

A simple web application that demonstrates the implementation of toast notifications using HTML, CSS, and JavaScript.

![Toast Notification](toast-notification.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases the creation of toast notifications, which are non-intrusive messages that appear briefly at the bottom of the screen to provide feedback or alerts to the user. It uses HTML, CSS, and JavaScript to display three types of notifications: success, error, and invalid input.

## Features

- Three buttons to trigger different types of toast notifications: Success, Error, and Invalid.
- Toast notifications with corresponding icons and messages.
- Automatically disappear after a few seconds to avoid obstructing the user's view.

## Usage

To use the toast notification application, follow these steps:

1. Clone this repository to your local machine or download the HTML, CSS, and JavaScript files.

2. Open the `index.html` file in a modern web browser.

3. Click the "Success," "Error," or "Invalid" button to trigger the corresponding toast notification.

4. The toast notification will appear at the bottom of the screen with a message and an icon. It will automatically disappear after a few seconds.

## Customization

You can customize the appearance and behavior of the toast notifications by modifying the HTML, CSS, and JavaScript files. Here are a few customization options:

- Change the icon classes (`<i>` elements) to use different icons from the Font Awesome library.
- Modify the messages and styling of the toast notifications in the CSS file (`style.css`).

```html
<!-- Example customization in index.html -->
<i class="fa-solid fa-circle-check"></i> Your Custom Success Message
```

```css
/* Example customization in style.css */
.toast.success {
  /* Customize success toast styles */
}

.toast.error {
  /* Customize error toast styles */
}

.toast.invalid {
  /* Customize invalid toast styles */
}
```

## Contributing

If you'd like to contribute to this project, you can do so by:

1. Forking the repository to your GitHub account.

2. Making your improvements or adding new features.

3. Submitting a pull request to have your changes reviewed and merged.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it for personal and educational purposes.

Enjoy creating and customizing toast notifications!
