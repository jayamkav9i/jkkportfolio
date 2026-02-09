// Fade-in sections
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
observer.observe(header);

// Active navbar links
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(window.scrollY >= sectionTop){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if(window.scrollY > 300){
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Back to top smooth scroll
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for navbar links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const offset = target.offsetTop - 80; // sticky navbar offset
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
