const page = document.getElementById('body');
const navbar = document.getElementById('navbar');
const customColorSelections = document.getElementsByClassName('color-selection');
const logo = document.getElementById('logo');

const makeFancy = (e) => {
  const fancyThemePicked = e.target;
  if (fancyThemePicked.id === 'dark-theme') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('navbar-default', 'contrast');
    navbar.classList.add('navbar-inverse');
    logo.classList.add('logo-inverted');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'black-txt', 'snowflake', 'bloom', 'music');
    page.classList.add('dark-theme');
  } else if (fancyThemePicked.id === 'snowflake') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('navbar-default', 'contrast');
    navbar.classList.add('navbar-inverse');
    logo.classList.add('logo-inverted');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'black-txt', 'dark-theme', 'bloom', 'music');
    page.classList.add('snowflake');
  } else if (fancyThemePicked.id === 'bloom') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('contrast', 'navbar-inverse');
    logo.removeAttribute('class');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'white-txt', 'dark-theme', 'snowflake', 'music');
    page.classList.add('bloom');
    navbar.classList.add('navbar-default');
  } else if (fancyThemePicked.id === 'music') {
    for (let i = 0; i < customColorSelections.length; i++) {
      customColorSelections[i].setAttribute('disabled', 'disabled');
    }
    navbar.classList.remove('contrast', 'navbar-inverse');
    logo.removeAttribute('class');
    page.classList.remove('tan', 'dark-violet', 'tomato', 'white-txt', 'dark-theme', 'snowflake', 'bloom');
    page.classList.add('music');
    navbar.classList.add('navbar-default');
  };
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
  const largeTextTheme = document.getElementById('large-txt');
  largeTextTheme.addEventListener('change', function () {
    if (this.checked) {
      page.classList.add('large-txt');
    } else {
      page.classList.remove('large-txt');
    };
  });

  const fancyThemes = document.getElementsByClassName('fancy-theme');
  for (let m = 0; m < fancyThemes.length; m++) {
    fancyThemes[m].addEventListener('click', makeFancy);
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
    const inputs = document.getElementsByClassName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    };
    for (let j = 0; j < customColorSelections.length; j++) {
      customColorSelections[j].removeAttribute('disabled');
    };
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
