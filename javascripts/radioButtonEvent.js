const addToArray = require('./addToArray');

let userName = '';

const button = (e) => {
  const selectedUserName = e.target.value;
  userName = selectedUserName;
};

const getUserName = () => {
  return userName;
};

const radioButtonEvent = () => {
  const radioButtons = document.getElementsByClassName('radioButton');
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', button);
  };
};

const keyPressEvent = (e) => {
  const messageInput = document.getElementById('messageInput').value;
  messageInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      addToArray();
    };
  });
};

module.exports = {
  radioButtonEvent,
  getUserName,
  keyPressEvent,
};
