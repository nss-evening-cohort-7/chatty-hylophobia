const editButtons = document.getElementsByClassName('edit');
editButtons.addEventListener('click', edditor);

const edditor = () => {
  const saveButton = document.getElementById('save');
  saveButton.classList.remove('hidden');
};
