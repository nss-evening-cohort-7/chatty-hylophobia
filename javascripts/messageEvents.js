const data = require('./data');
const buildDomString = require('./dom');
const emojify = require('../lib/node_modules/emojify.js/dist/js/emojify');

const editButtons = document.getElementsByClassName('edit');
const inputVal = document.getElementById('messageInput');

let id = 0;

const getId = (e) => {
  const id = e.target.parentNode.id;
  return id;
};

const initEditButton = () =>
{
  for (let idx = 0; idx < editButtons.length; idx++)
  {
    editButtons[idx].addEventListener('click', (e) => {
      id = getId(e) * 1;
      edditor(e);
    });
  };
};

const edditor = (e) => {
  inputVal.value = e.target.previousSibling.innerHTML;
  // removeListener();
  saveButton();
};

const saveButton = () => {
  const saveButton = document.getElementById('save');
  saveButton.classList.remove('hidden');
  saveButton.addEventListener('click', replaceInArray);
};

const replaceInArray = () => {
  const messages = data.getMessages();
  messages.forEach((message) => {
    if (message.id === id) {
      message.message = inputVal.value;
    }
  });
  inputVal.value = '';
  const saveButton = document.getElementById('save');
  saveButton.classList.add('hidden');
  data.setMessages(messages);
  buildDomString(messages);
  messageEvents();
  emojify.run(document.getElementById('messages-display'));
};

const deleteButtons = document.getElementsByClassName('delete-message');

const removeFromArray = (id) => {
  const messages = data.getMessages();
  const newMessages = messages.filter(message => message.id !== id);
  buildDomString(newMessages);
  messageEvents();
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

const messageEvents = () => {
  deleteEventListener();
  initEditButton();
};

module.exports = messageEvents;
