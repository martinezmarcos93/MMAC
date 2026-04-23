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
async function enviarFormularioCompleto() {
  const nombre   = document.getElementById('fn').value.trim();
  const contacto = document.getElementById('fc').value.trim();
  const mensaje  = document.getElementById('fm').value.trim();

  if (!nombre || !contacto) {
    alert('Por favor completá al menos nombre y contacto.');
    return;
  }

  const btn = document.querySelector('.form-btn');
  btn.innerText = 'Enviando...';
  btn.disabled = true;

  // 1. WhatsApp se abre SIEMPRE, pase lo que pase con el mail
  const waText = encodeURIComponent(
    `Hola Marcos! Te escribo desde tu web.\n\nNombre: ${nombre}\nContacto: ${contacto}\n\n${mensaje}`
  );
  window.open(`https://wa.me/5491151062286?text=${waText}`, '_blank');

  // 2. Mostrar éxito al usuario inmediatamente
  document.getElementById('form-success').classList.add('show');
  document.getElementById('fn').value = '';
  document.getElementById('fc').value = '';
  document.getElementById('fm').value = '';
  btn.innerText = 'Consulta enviada ✓';

  // 3. Intentar enviar mail en segundo plano (silencioso — no bloquea ni muestra error)
  try {
    await fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, contacto, mensaje })
    });
  } catch (e) {
    // El mail falló silenciosamente — WhatsApp ya se abrió, no pasa nada
    console.warn('Email no enviado:', e);
  }
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
