const page = document.getElementById('body');
const navbar = document.getElementById('navbar');
const customColorSelections = document.getElementsByClassName('color-selection');

const changeTheme = (e) => {
  const themePicked = e.target;
  if (themePicked.id === 'dark-theme') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    page.classList.add('dark-theme');
    navbar.classList.remove('navbar-default');
    navbar.classList.add('navbar-inverse');
    page.classList.remove('tan');
    page.classList.remove('dark-violet');
    page.classList.remove('tomato');
    page.classList.remove('black-txt');
  } else if (themePicked.id === 'large-txt') {
    page.classList.add('large-txt');
  };
  return themePicked;
};

const removeTheme = (e) => {
  const themeToRemove = e.target;
  if (themeToRemove.id === 'dark-theme') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].removeAttribute('disabled');
    }
    page.classList.remove('dark-theme');
    navbar.classList.add('navbar-default');
    navbar.classList.remove('navbar-inverse');
  } else if (themeToRemove.id === 'large-txt') {
    page.classList.remove('large-txt');
  };
  return themeToRemove;
};

const changeColor = (e) => {
  const colorPicked = e.target;
  if (colorPicked.id === 'tomato') {
    page.classList.add('tomato');
    page.classList.remove('tan');
    page.classList.remove('dark-violet');
  } else if (colorPicked.id === 'tan') {
    page.classList.add('tan');
    page.classList.remove('dark-violet');
    page.classList.remove('tomato');
  } else if (colorPicked.id === 'dark-violet') {
    page.classList.add('dark-violet');
    page.classList.remove('tomato');
    page.classList.remove('tan');
  }
  return colorPicked;
};

const changeTxtColor = (e) => {
  const txtColorPicked = e.target;
  if (txtColorPicked.id === 'black-txt') {
    page.classList.add('black-txt');
    page.classList.remove('white-txt');
    navbar.classList.remove('contrast');
  } else if (txtColorPicked.id === 'white-txt') {
    page.classList.add('white-txt');
    page.classList.remove('black-txt');
    navbar.classList.add('contrast');
  };
  return txtColorPicked;
};

const selectThemeEvents = () => {
  const themeChoices = document.getElementsByClassName('theme');
  for (let i = 0; i < themeChoices.length; i++) {
    themeChoices[i].addEventListener('change', function () {
      if (this.checked) {
        changeTheme(event);
      } else {
        removeTheme(event);
      }
    });
  };
  const colorChoices = document.getElementsByClassName('colors');
  for (let j = 0; j < colorChoices.length; j++) {
    colorChoices[j].addEventListener('click', changeColor);
  };
  const txtColorChoices = document.getElementsByClassName('txt-colors');
  for (let k = 0; k < txtColorChoices.length; k++) {
    txtColorChoices[k].addEventListener('click', changeTxtColor);
  };
};

module.exports = {
  selectThemeEvents,
};
