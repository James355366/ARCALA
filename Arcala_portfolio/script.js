/* ── SMOOTH SCROLL ───────────────────────── */
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



/* ── REVEAL SECTIONS ON SCROLL ───────────── */
const revealEls = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));



/* ── MODAL ───────────────────────────────── */
const modal       = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalDesc   = document.getElementById('modalDescription');

function openModal(src, description) {
  modalDesc.textContent = description;

  if (src.endsWith('.mp4')) {
    modalContent.innerHTML = `<video src="${src}" controls autoplay></video>`;
  } else {
    modalContent.innerHTML = `<img src="${src}" alt="${description}">`;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
}

// close when clicking the dark backdrop
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// close with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
