
let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messagesArray) => {
  messages = messagesArray;
};

module.exports = {
  getMessages,
  setMessages,
};
