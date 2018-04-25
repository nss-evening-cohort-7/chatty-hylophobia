const deleteEventListener = require('./deleteEventListener');
const editButtons = document.getElementsByClassName('edit');
const inputVal = document.getElementById('inputField');
const enterListener = document.getElementsByClassName('form-control');
const initEditButton = () =>
{
  for (let idx = 0; idx < editButtons.length; idx++)
  {
    editButtons[idx].addEventListener('click', edditor);
  };
};

const removeListener = () =>
{
  for (let idx = 0; idx < enterListener.length; idx++)
  {
    enterListener[idx].removeEventListener('click', function () {});
  }
};

const edditor = (e) =>
{
  const saveButton = document.getElementById('save');
  removeListener();
  saveButton .classList.remove('hidden');
  const messageID = deleteEventListener.getId(e);
  console.log(messageID);
  inputVal.value = e.target.previousSibling.innerHTML;
  console.log(inputVal.value);
};

module.exports =
{
  edditor,
  initEditButton,
};
