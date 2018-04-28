const data = require('./data');
const buildDomString = require('./dom');
const edit = require('./editEventListener');
const emojify = require('../lib/node_modules/emojify.js/dist/js/emojify');

const getId = (e) => {
  const id = e.target.parentNode.id;
  return id;
};

const deleteButtons = document.getElementsByClassName('delete-message');

const removeFromArray = (id) => {
  const messages = data.getMessages();
  const newMessages = messages.filter(message => message.id !== id);
  buildDomString(newMessages);
  deleteEventListener();
  edit.initEditButton();

  data.setMessages(newMessages);
  emojify.run(document.getElementById('messages-display'));
};

const deleteEventListener = () => {
  for (let i = 0; i < deleteButtons.length; i ++) {
    deleteButtons[i].addEventListener('click', (e) => {
      let messageID = getId(e);
      messageID = messageID * 1;
      removeFromArray(messageID);
    });
  }
};

module.exports = {
  deleteEventListener,
  getId,
};
