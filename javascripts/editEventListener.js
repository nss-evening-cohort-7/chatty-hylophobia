const editButtons = document.getElementsByClassName('edit');
const initEditButton = () =>
{
  for (let idx = 0; idx < editButtons.length; idx++)
  {
    editButtons[idx].addEventListener('click', edditor);
  };
};

const edditor = () =>
{
  const saveButton = document.getElementById('save');
  saveButton .classList.remove('hidden');
};

module.exports =
{
  edditor,
  initEditButton,
};
