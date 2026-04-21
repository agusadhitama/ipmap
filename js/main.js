/* =============================================
   IPMAP - Main JavaScript
   ============================================= */

// ========================
// LOADER
// ========================
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderText = document.getElementById('loaderText');

const messages = ['Memuat...', 'Menghubungkan...', 'Selamat Datang!'];
let progress = 0;
let msgIdx = 0;

const loadInterval = setInterval(() => {
  progress += Math.random() * 18 + 5;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadInterval);
    loaderText.textContent = messages[2];
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      initReveal();
      initCounters();
    }, 600);
  }
  loaderFill.style.width = progress + '%';
  if (progress > 40 && msgIdx === 0) { msgIdx = 1; loaderText.textContent = messages[1]; }
}, 80);

document.body.style.overflow = 'hidden';

// ========================
// NAVBAR
// ========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Overlay for mobile
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  overlay.classList.toggle('show');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
        link.style.color = 'var(--text)';
      }
    }
  });
});

// ========================
// HERO CANVAS - PARTICLES
// ========================
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const PARTICLE_COUNT = 80;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3 - 0.2,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.6 + 0.1,
    twinkle: Math.random() * Math.PI * 2,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const time = Date.now() * 0.001;

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.twinkle += 0.02;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.twinkle));
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(75, 189, 212, ${alpha})`;
    ctx.fill();
  });

  // Draw subtle connections
  particles.forEach((p1, i) => {
    for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
      const p2 = particles[j];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(75, 189, 212, ${0.05 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();

// ========================
// SCROLL REVEAL
// ========================
function initReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // Trigger hero elements immediately
  document.querySelectorAll('.hero [data-reveal]').forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), i * 150 + 200);
  });
}

// ========================
// COUNTER ANIMATION
// ========================
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const update = () => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current);
          if (current < target) requestAnimationFrame(update);
        };
        update();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ========================
// GALLERY DRAG SCROLL
// ========================
const galeriTrack = document.querySelector('.galeri-track');
if (galeriTrack) {
  let isDown = false;
  let startX;
  let scrollLeft;

  galeriTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - galeriTrack.offsetLeft;
    scrollLeft = galeriTrack.scrollLeft;
    galeriTrack.style.cursor = 'grabbing';
  });

  galeriTrack.addEventListener('mouseleave', () => { isDown = false; galeriTrack.style.cursor = 'grab'; });
  galeriTrack.addEventListener('mouseup', () => { isDown = false; galeriTrack.style.cursor = 'grab'; });
  galeriTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galeriTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    galeriTrack.scrollLeft = scrollLeft - walk;
  });
}

// ========================
// SMOOTH SCROLL
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========================
// PARALLAX ON SCROLL
// ========================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  const mountain = document.querySelector('.mountain-silhouette');
  if (heroContent && scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
  }
  if (mountain) {
    mountain.style.transform = `translateY(${scrollY * 0.15}px)`;
  }
});

// ========================
// PROGRAM CARD HOVER EFFECT
// ========================
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

console.log('%c IPMAP 🏔 ', 'background: #4BBDD4; color: #06171c; font-size: 1.5rem; font-weight: bold; padding: 8px 16px; border-radius: 4px;');
console.log('%c Ikatan Pelajar & Mahasiswa Kabupaten Puncak', 'color: #4BBDD4; font-size: 0.9rem;');
