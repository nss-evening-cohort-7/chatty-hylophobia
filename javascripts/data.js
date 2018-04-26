
let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messagesArray) => {
  messages = messagesArray;
};

const addMessage = (newMessage) => {
  messages.push(newMessage);
};

const saveChanges = () => {
  const messageInput = document.getElementById('messageInput').value;
  return messageInput;
};

module.exports = {
  getMessages,
  setMessages,
  saveChanges,
  addMessage,
};
