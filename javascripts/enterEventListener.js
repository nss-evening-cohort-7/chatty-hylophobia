const addToArray = require('./addToArray');
const deleteEventListener = require('./deleteEventListener');
const edit = require('./editEventListener');

const enterListener = () => {
  console.log('hello');
  document.querySelector('#messageInput').addEventListener('keypress', keypressEnter);
};

const keypressEnter = (e) =>
{
  const key = e.keyCode;
  if (key === 13)
  {
    addToArray();
    edit.initEditButton();
    deleteEventListener.deleteEventListener();
    document.querySelector('#messageInput').value = '';
  };
};

module.exports = enterListener;
