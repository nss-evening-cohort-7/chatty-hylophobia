const addToArray = require('./addToArray');
const buildDomString = require('./dom');
const data = require('./data');
const deleteEventListener = require('./deleteEventListener');
const edit = require('./editEventListener');

const enterListener = () => {
  console.log('hello');
  document.querySelector('input').addEventListener('keypress', keypressEnter);
};

const keypressEnter = (e) =>
{
  const key = e.keyCode;
  if (key === 13)
  {
    const messages = data.getMessages();
    addToArray();
    buildDomString(messages);
    edit.initEditButton();
    deleteEventListener.deleteEventListener();
    document.querySelector('input').value = '';
  };
};

module.exports = enterListener;
