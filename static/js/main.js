// Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .service-card, .exp-row').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Form
function sendForm() {
  const name = document.getElementById('fn').value.trim();
  const contact = document.getElementById('fc').value.trim();
  const msg = document.getElementById('fm').value.trim();
  if (!name || !contact) {
    alert('Por favor completá al menos nombre y contacto.');
    return;
  }
  const waText = encodeURIComponent(
    `Hola Marcos! Te escribo desde tu web.\n\nNombre: ${name}\nContacto: ${contact}\n\n${msg}`
  );
  window.open(`https://wa.me/5491151062286?text=${waText}`, '_blank');
  document.getElementById('form-success').classList.add('show');
}

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--gold)';
    }
  });
});
