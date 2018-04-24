
// const buildDomString = (messagesArray) => {
//   let domString = '';
//   messagesArray.forEach((message) => {
//     domString +=  `<div id="${message.id}">`;
//     domString +=    `<h5>${message.username}:</h5`;
//     domString +=    `<p>${message.message}</p>`;
//     domString +=    `<p>${message.timestamp}</p>`;
//     domString +=  `</div>`;
//   });
// };

const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const buildDomString = () => {
  let domString = '';
  domString +=  `<div class="complete-message" id="2">`;
  domString +=    `<h4 class="displayed-username">Gingerbread Man </h4>`;
  domString +=    `<p class="displayed-time">[April 28, 2018 5:27:05]:</p>`;
  domString +=    `<p class="displayed-message">Catch me if you can</p>`;
  domString +=  `</div>`;
  printToDom('test-div', domString);
};

module.exports = buildDomString;
