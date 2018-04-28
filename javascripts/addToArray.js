const getUser = require('./radioButtonEvent');
const  dom = require('./dom');
const data = require('./data');
const moment = require('moment');
let counter = 6;

const addToArray = () => {
  const timestamp = moment().format('MMMM Do YYYY, h:mm:ss');
  const newObject = {
    'username': getUser.getUserName(),
    'message': data.saveChanges(),
    'timestamp': timestamp,
    'id': counter,
  };
  if (newObject.username === '') {
    alert('Select A User Name!!!');
  } else {
    counter++;
    data.addMessage(newObject);
    dom(data.getMessages());
  };
};

module.exports = addToArray;
