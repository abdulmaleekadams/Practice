let rightBox = document.getElementById('right'),
  leftBox = document.getElementById('left'),
  lists = document.querySelectorAll('.list');

lists.forEach((list) => {
  list.addEventListener('dragstart', (e) => {
    let selected = e.target;

    console.log('DragStart');

    rightBox.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener('drop', (e) => {
      if (selected !== null) {
        rightBox.appendChild(selected);
      }
      selected = null;
    });

    leftBox.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener('drop', (e) => {
      if (selected !== null) {
        leftBox.appendChild(selected);
      }
      selected = null;
    });
  });
});
