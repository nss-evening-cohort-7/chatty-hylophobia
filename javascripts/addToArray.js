const getUser = require('./radioButtonEvent');
const  dom = require('./dom');
const data = require('./data');
const moment = require('moment');

const addToArray = () => {
  let counter = 6;
  const timestamp = moment().format('MMMM Do YYYY, h:mm:ss');
  console.log(timestamp);
  const newObject = {
    'username': getUser.getUserName(),
    'message': data.saveChanges(),
    'timestamp': timestamp,
    'id': counter ++,
  };
  data.addMessage(newObject);
  dom(data.getMessages());
  console.log(data.message);
};

module.exports = addToArray;
