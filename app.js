const btnModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

function handleClick(e) {
  modal.style.display = 'block';
}

function handleClose(e) {
  modal.style.display = 'none';
}

btnModal.addEventListener('click', handleClick);
closeModal.addEventListener('click', handleClose);

window.addEventListener('click', e => {
  if (e.target.className === 'modal') {
    modal.style.display = 'none';
  }
});
