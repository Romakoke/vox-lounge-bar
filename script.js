const sections = document.querySelectorAll('.section, .vip, .contact');

sections.forEach(section => {
  section.classList.add('reveal');
});

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 120) {
      section.classList.add('active');
    }
  });
});
