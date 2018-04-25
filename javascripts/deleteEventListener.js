const data = require('./data');

const getId = (e) => {
  const id = e.target.parentNode.id;
  return id;
};

const deleteButtons = document.getElementsByClassName('delete-message');

const deleteEventListener = () => {
  for (let i = 0; i < deleteButtons.length; i ++) {
    deleteButtons[i].addEventListener('click', (e) => {
      const messageID = getId(e);
      data.removeFromArray(messageID);
    });
  }
};

module.exports = {
  deleteEventListener,
  getId,
};
