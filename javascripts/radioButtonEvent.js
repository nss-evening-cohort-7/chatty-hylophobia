// const addToArray = require('./addToArray');

let userName = '';

const button = (e) => {
  const selectedUserName = e.target.value;
  userName = selectedUserName;
};

const getUserName = () => {
  return userName;
  // console.log (userName);
};

const radioButtonEvent = () => {
  const radioButtons = document.getElementsByClassName('radioButton');
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', button);
  };
};

module.exports = {
  radioButtonEvent,
  getUserName,
};
