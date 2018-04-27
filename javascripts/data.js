
let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messagesArray) => {
  messages = messagesArray;
};

const addMessage = (newMessage) => {
  messages.push(newMessage);
  messageLimit(messages);
};

const messageLimit = (messagesArray) => {
  if (messagesArray.length > 20) {
    const shiftThis = messagesArray.shift();
    const limitedMessages = messagesArray.filter(message => message !== shiftThis);
    setMessages(limitedMessages);
  }
};

const saveChanges = () => {
  const messageInput = document.getElementById('messageInput').value;
  return messageInput;
};

module.exports = {
  getMessages,
  setMessages,
  messageLimit,
  saveChanges,
  addMessage,
};
