const loadMessages = require('./messages');
const data = require('./data');
const buildDomString = require('./dom');
const deleteEventListener = require('./deleteEventListener');
const radioButton = require('./radioButtonEvent');
const edit = require('./editEventListener');
const clearButton = require('./clearEvent');
// const addToArray = require('./addToArray');

const whenMessagesLoads = function () {
  const messagesData = JSON.parse(this.responseText).messages;
  data.setMessages(messagesData);
  buildDomString(messagesData);
  edit.initEditButton();
  deleteEventListener.deleteEventListener();
  // addToArray();
};

const errorFunction = function () {
  console.error('no good señor');
};

const initializer = () => {
  loadMessages(whenMessagesLoads, errorFunction);
  edit.initEditButton();
  radioButton.radioButtonEvent();
  clearButton.addClearEvent();
};

module.exports = {
  initializer,
};
