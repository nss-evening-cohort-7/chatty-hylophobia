const loadMessages = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/msg.json');
  myRequest.send();
};

module.exports = loadMessages;
