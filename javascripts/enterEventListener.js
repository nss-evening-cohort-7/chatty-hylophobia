const addToArray = require('./addToArray');
const deleteEventListener = require('./deleteEventListener');
const edit = require('./editEventListener');
const emojify = require('../lib/node_modules/emojify.js/dist/js/emojify');

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
    emojify.setConfig({'img_dir': './lib/jemoji/emojis',});
    emojify.run(document.getElementById('messages-display'));
    edit.initEditButton();
    deleteEventListener.deleteEventListener();
    document.getElementById('messageInput').value = '';
  };
};

module.exports = enterListener;
