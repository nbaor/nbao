// ────────────────────────────────────────
// SCROLL REVEAL — fade in sections on scroll
// ────────────────────────────────────────
const sections = document.querySelectorAll('section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => {
  sec.classList.add('hidden');
  revealObserver.observe(sec);
});

// ────────────────────────────────────────
// NAV ACTIVE LINK — highlight current section
// ────────────────────────────────────────
const navLinks = document.querySelectorAll('nav ul a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const active = document.querySelector(`nav ul a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));

// ────────────────────────────────────────
// PROJECT CARDS — open link on click (optional)
// Thêm thuộc tính data-url="https://..." vào .project-card để bật
// ────────────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.dataset.url;
    if (url) window.open(url, '_blank');
  }); 
});
