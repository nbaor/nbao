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

const music = document.getElementById("bg-music");
const slider = document.getElementById("volume-slider");

const music = document.getElementById("bg-music");
const slider = document.getElementById("volume-slider");
const icon = document.getElementById("volume-icon");

music.volume = slider.value;

slider.addEventListener("input", () => {
  music.volume = slider.value;

  if (slider.value == 0) icon.textContent = "🔇";
  else if (slider.value < 0.5) icon.textContent = "🔉";
  else icon.textContent = "🔊";
});

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
