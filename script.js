// ===========================
//  KIRABO MAUREEN — PORTFOLIO
//  script.js
// ===========================

// === MOBILE MENU TOGGLE ===
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// === NAVBAR SCROLL EFFECT ===
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '12px 40px';
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    navbar.style.padding = '20px 40px';
    navbar.style.boxShadow = 'none';
  }
});

// === SCROLL REVEAL ANIMATION ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply to cards and sections
document.querySelectorAll('.skill-card, .service-card, .stat, .about-text, .highlight-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navLink) {
      if (scrollPos >= top && scrollPos < top + height) {
        navLink.style.color = 'var(--purple-glow)';
      } else {
        navLink.style.color = 'var(--grey)';
      }
    }
  });
});

// === SMOOTH SCROLL FOR ALL ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('Portfolio loaded — Built by Kirabo Maureen 🇺🇬');
