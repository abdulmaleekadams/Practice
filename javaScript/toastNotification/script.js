let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted',
  errorMsg = '<i class="fa-solid fa-circle-xmark"></i>An error occured, please try again',
  invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

const showToast = (msg) => {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  msg.includes('error') && toast.classList.add('error')
  msg.includes('Success') && toast.classList.add('success')
  msg.includes('Invalid') && toast.classList.add('invalid')
  toastBox.appendChild(toast);
  
  setTimeout(() => {
    toast.remove()
  }, 5000);
};
