const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const darkBtn = document.getElementById('darkBtn');
const body = document.body;

/* MOBILE MENU */
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

/* DARK MODE */
darkBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

/* LOAD SAVED THEME */
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}
