const data = require('./data');
const buildDomString = require('./dom');
const emojify = require('../lib/node_modules/emojify.js/dist/js/emojify');
const addToArray = require('./addToArray');

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

// const removeListener = () => {
//   document.querySelector('#messageInput').removeEventListener();
// };

const edditor = (e) =>
{
  if (inputVal.value = e.target.previousSibling.innerHTML) {
    document.querySelector('#messageInput').removeEventListener('keypress', keypressEnter);
  };
  // keypressEnter.preventDefault();
  // keypressEnter.preventDefault();
  // const enterListener = () => {
  //   enterListener.preventDefault
  //   document.querySelector('#messageInput').addEventListener('keypress', keypressEnter);

  // };
  // document.querySelector('#messageInput').removeEventListener('keypress', keypressEnter){

  // }
  // const key = document.querySelector('#messageInput');
  // if (key === 13)
  // {
  //   inputVal.preventDefault();
  //   return false;
  // };

  // // const key = e.keyCode
  // if (key === 13)
  // {
  //   key.preventDefault();
  //   // return false;
  // };
  // document.querySelector('#messageInput').removeEventListener('keyPress', keypressEnter);
  saveButton();
};

const saveButton = () => {
  const saveButton = document.getElementById('save');
  saveButton.classList.remove('hidden');
  saveButton.addEventListener('click', replaceInArray);
};

const replaceInArray = (e) => {
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
    emojify.setConfig({'img_dir': './lib/jemoji/emojis',});
    emojify.run(document.getElementById('messages-display'));
    document.getElementById('messageInput').value = '';
  };
};

module.exports = {
  messageEvents,
  enterListener,
};
