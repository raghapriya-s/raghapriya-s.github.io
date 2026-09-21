const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const topButton = document.getElementById('topButton');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  topButton.classList.toggle('show', window.scrollY > 500);
});

topButton.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold:0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
