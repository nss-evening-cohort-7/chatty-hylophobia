const page = document.getElementById('body');
const navbar = document.getElementById('navbar');

const changeTheme = (e) => {
  const themePicked = e.target;
  if (themePicked.id === 'dark-theme') {
    page.classList.add('dark-theme');
    navbar.classList.remove('navbar-default');
    navbar.classList.add('navbar-inverse');
  } else if (themePicked.id === 'large-txt') {
    page.classList.add('large-txt');
  };
  return themePicked;
};

const removeTheme = (e) => {
  const themeToRemove = e.target;
  if (themeToRemove.id === 'dark-theme') {
    page.classList.remove('dark-theme');
    navbar.classList.add('navbar-default');
    navbar.classList.remove('navbar-inverse');
  } else if (themeToRemove.id === 'large-txt') {
    page.classList.remove('large-txt');
  };
  return themeToRemove;
};

const selectThemeEvent = () => {
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
};

module.exports = {
  selectThemeEvent,
};
