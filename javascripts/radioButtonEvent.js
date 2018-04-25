const radioButtons = document.getElementsByClassName('radioButton');

let userName = '';

const button = (e) => {
  console.log(e);
  const selectedUserName = e.target;
  return selectedUserName;
};

const radioButtonEvent = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons.addEventListener('click', button);
    userName = selectedUserName;
  };
  return userName;
};

module.exports = radioButtonEvent;
