let selectedField = document.getElementById('selectField'),
  selectedText = document.getElementById('selectText'),
  list = document.getElementById('list'),
  options = document.querySelectorAll('.options'),
  arrowIcon = document.getElementById('arrow');

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    selectedText.innerHTML = e.target.textContent;
    list.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')
  });
});

selectedField.addEventListener('click', () => {
  list.classList.toggle('hide')
  arrowIcon.classList.toggle('rotate')

});

