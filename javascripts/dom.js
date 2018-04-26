
// const edit = require('./editEventListener');

const buildDomString = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString +=  `<div class="complete-message" id="${message.id}">`;
    domString +=    `<h5 class="displayed-username">${message.username}:</h5>`;
    domString +=    `<p class="displayed-time">[${message.timestamp}]:</p>`;
    domString +=    `<p class="displayed-message">${message.message}</p>`;
    domString +=    `<button class="edit">Edit</button>`;
    domString +=    `<button class="delete-message">Delete</button>`;
    domString +=  `</div>`;
  });
  printToDom('messages-display', domString);
  // edit.initEditButton();
};

const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

module.exports = buildDomString;
