const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('.section, .vip, .contact');
const tabs = document.querySelectorAll('.tab');
const menuCards = document.querySelectorAll('.menu-card');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    menuCards.forEach(card => {
      card.classList.toggle(
        'hide',
        filter !== 'all' && card.dataset.category !== filter
      );
    });
  });
});
