const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

const revealItems = document.querySelectorAll('.section, .split-section, .contact, .gallery-section');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
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

revealItems.forEach(item => {
  item.classList.add('reveal');
  observer.observe(item);
});

window.addEventListener('scroll', () => {
  let current = '';

  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 160) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
