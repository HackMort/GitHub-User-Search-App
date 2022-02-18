const themeButtonToggle = document.querySelector('[data-theme]');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
let theme = 'dark';
if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme');
}
else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme');
}
themeButtonToggle.addEventListener('click', toggleTheme);
themeButtonToggle.addEventListener('click', function () {
  this.textContent = this.textContent === 'Dark' ? 'Light' : 'Dark';
});
function toggleTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-theme');
    theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  }
  else {
    document.body.classList.toggle('dark-theme');
    theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }
  localStorage.setItem('theme', theme);
}
