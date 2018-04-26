const addToArray = require('./addToArray');
const buildDomString = require('./dom');
const data = require('./data');

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
    document.querySelector('input').value = '';
  };
};

module.exports = enterListener;
