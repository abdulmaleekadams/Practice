let submitBtn = document.querySelector('button.btn'),
  popup = document.querySelector('.popup');

function openClosePopup() {
  popup.classList.toggle('success');
  submitBtn.classList.toggle('hide');
}
