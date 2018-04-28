const addToArray = require('./addToArray');
const messageEvents = require('./messageEvents');

const enterListener = () => {
  document.querySelector('#messageInput').addEventListener('keypress', keypressEnter);
};

const keypressEnter = (e) =>
{
  const key = e.keyCode;
  if (key === 13)
  {
    addToArray();
    messageEvents();
    document.querySelector('#messageInput').value = '';
  };
};

module.exports = enterListener;
