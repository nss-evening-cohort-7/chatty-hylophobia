const clearButton = document.getElementById('clearBTN');

const addClearEvent = () => {
  clearButton.addEventListener('click', clearALL);
};

const clearALL = (e) => {
  const arrayToClear = document.getElementById('messages-display');
  arrayToClear.innerHTML = '';
};

module.exports = {
  addClearEvent,
};
