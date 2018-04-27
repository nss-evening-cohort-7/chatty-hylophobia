const getUser = require('./radioButtonEvent');
const  dom = require('./dom');
const data = require('./data');
const moment = require('moment');
// let counter = 6;

const addToArray = () => {
  const timestamp = moment().format('MMMM Do YYYY, h:mm:ss');
  let counter = 6;
  console.log(timestamp);
  const newObject = {
    'username': getUser.getUserName(),
    'message': data.saveChanges(),
    'timestamp': timestamp,
    'id': counter,
  };
  counter++;
  data.addMessage(newObject);
  dom(data.getMessages());
  console.log(data.getMessages);
};

module.exports = addToArray;
