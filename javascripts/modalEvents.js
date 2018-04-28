const page = document.getElementById('body');
const navbar = document.getElementById('navbar');
const customColorSelections = document.getElementsByClassName('color-selection');
const logo = document.getElementById('logo');

const changeTheme = (e) => {
  const themePicked = e.target;
  if (themePicked.id === 'dark-theme') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('navbar-default', 'contrast');
    navbar.classList.add('navbar-inverse');
    logo.classList.add('logo-inverted');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'black-txt');
    page.classList.add('dark-theme');
  } else if (themePicked.id === 'large-txt') {
    page.classList.add('large-txt');
  } else if (themePicked.id === 'snowflake') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('navbar-default', 'contrast');
    navbar.classList.add('navbar-inverse');
    logo.classList.add('logo-inverted');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'black-txt');
    page.classList.add('snowflake');
  };
  return themePicked;
};

const removeTheme = (e) => {
  const themeToRemove = e.target;
  if (themeToRemove.id === 'dark-theme') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].removeAttribute('disabled');
    }
    logo.removeAttribute('class');
    page.classList.remove('dark-theme');
    navbar.classList.add('navbar-default');
    navbar.classList.remove('navbar-inverse');
  } else if (themeToRemove.id === 'large-txt') {
    page.classList.remove('large-txt');
  } else if (themeToRemove.id === 'snowflake') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].removeAttribute('disabled');
    }
    page.classList.remove('snowflake');
    logo.removeAttribute('class');
    navbar.classList.add('navbar-default');
    navbar.classList.remove('navbar-inverse');
  };
  return themeToRemove;
};

const changeColor = (e) => {
  const colorPicked = e.target;
  if (colorPicked.id === 'tomato') {
    page.classList.remove('tan', 'dark-violet');
    page.classList.add('tomato');
  } else if (colorPicked.id === 'tan') {
    page.classList.remove('dark-violet', 'tomato');
    page.classList.add('tan');
  } else if (colorPicked.id === 'dark-violet') {
    page.classList.remove('tomato', 'tan');
    page.classList.add('dark-violet');
  }
  return colorPicked;
};

const changeTxtColor = (e) => {
  const txtColorPicked = e.target;
  if (txtColorPicked.id === 'black-txt') {
    page.classList.remove('white-txt');
    navbar.classList.remove('contrast');
    logo.removeAttribute('class');
    page.classList.add('black-txt');
  } else if (txtColorPicked.id === 'white-txt') {
    page.classList.remove('black-txt');
    navbar.classList.add('contrast');
    logo.classList.add('logo-inverted');
    page.classList.add('white-txt');
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

const removeAllThemes = () => {
  const cancelButton = document.getElementById('cancel-changes');
  cancelButton.addEventListener('click', function () {
    page.removeAttribute('class');
    logo.removeAttribute('class');
    navbar.classList.remove('navbar-inverse', 'contrast');
    navbar.classList.add('navbar-default');
  });
};

module.exports = {
  selectThemeEvents,
  removeAllThemes,
};
