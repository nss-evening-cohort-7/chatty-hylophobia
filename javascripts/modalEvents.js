const changeTheme = (e) => {
  const themePicked = e.target;
  if (themePicked.id === 'dark-theme') {
    const page = document.getElementById('body');
    const navbar = document.getElementById('navbar');
    page.classList.add('dark-theme');
    navbar.classList.remove('navbar-default');
    navbar.classList.add('navbar-inverse');
  };
  console.log(themePicked);
};

const selectThemeEvent = () => {
  const themeChoices = document.getElementsByClassName('theme');
  for (let i = 0; i < themeChoices.length; i++) {
    themeChoices[i].addEventListener('click', changeTheme);
  };
};

module.exports = selectThemeEvent;
